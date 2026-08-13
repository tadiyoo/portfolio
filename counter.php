<?php
/**
 * File-based visit counter (no database).
 *
 * Stores one plain-text integer per page in the ./counters directory and is
 * safe under concurrent traffic: an exclusive advisory lock (flock) wraps the
 * read-modify-write so two simultaneous visits can never lose a count.
 *
 * Usage from the page:
 *   fetch('counter.php?page_url=home')        -> increments + returns new count
 *   fetch('counter.php?page_url=home&mode=read') -> returns count without incrementing
 *
 * The response body is the plain integer count (matches `await response.text()`).
 */

header('Content-Type: text/plain; charset=utf-8');
// Counters must never be cached by the browser or any proxy.
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

// ---- Configuration -------------------------------------------------------
$dataDir    = __DIR__ . '/counters'; // where the per-page files live
$startValue = 0;                     // count used the first time a page is seen
$maxKeyLen  = 64;                    // max length of a sanitised page key

// ---- Resolve and sanitise the page key -----------------------------------
// Only [a-z0-9_-] is allowed, so the value can never escape the data dir
// (no "../", no slashes, no path traversal).
$page = isset($_GET['page_url']) ? (string) $_GET['page_url'] : 'home';
$page = strtolower(trim($page));
$page = preg_replace('/[^a-z0-9_-]/', '', $page);
if ($page === '') {
    $page = 'home';
}
$page = substr($page, 0, $maxKeyLen);

// ?mode=read returns the value WITHOUT counting the visit.
$increment = !(isset($_GET['mode']) && $_GET['mode'] === 'read');

$count = $startValue;

try {
    if (!is_dir($dataDir) && !@mkdir($dataDir, 0755, true) && !is_dir($dataDir)) {
        throw new RuntimeException('counters directory is not available');
    }

    $file = $dataDir . '/' . $page . '.txt';

    // 'c+' : read/write, create if missing, DO NOT truncate, pointer at start.
    $fp = @fopen($file, 'c+');
    if ($fp === false) {
        throw new RuntimeException('cannot open counter file');
    }

    // Exclusive lock serialises concurrent visits to the SAME page.
    // Different pages use different files, so they never block each other.
    if (!flock($fp, LOCK_EX)) {
        fclose($fp);
        throw new RuntimeException('cannot lock counter file');
    }

    $raw     = stream_get_contents($fp);
    $current = is_numeric(trim($raw)) ? (int) trim($raw) : $startValue;

    if ($increment) {
        $current++;
        rewind($fp);
        ftruncate($fp, 0);
        fwrite($fp, (string) $current);
        fflush($fp);
    }

    $count = $current;

    flock($fp, LOCK_UN);
    fclose($fp);
} catch (Throwable $e) {
    // Never hard-fail a visitor over a counter: still return a number.
    http_response_code(200);
}

echo $count;
