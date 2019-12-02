<?php

$rssUrl = $_GET['siteurl'];

header('Content-Type: application/json');
$feed = new DOMDocument();
$feed->load($rssUrl);
$json = array();

$json['title'] = $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('title')->item(0)->firstChild->nodeValue;
$json['description'] = $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('description')->item(0)->firstChild->nodeValue;
$json['link'] = $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('link')->item(0)->firstChild->nodeValue;

$items = $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('item');

$json['item'] = array();
$i = 0;
$limit = 5;

if(isset($_GET['limit'])) $limit = $_GET['limit'];


foreach($items as $item) {

	$title = $item->getElementsByTagName('title')->item(0)->firstChild->nodeValue;
	$link = $item->getElementsByTagName('link')->item(0)->firstChild->nodeValue;
	$description = $item->getElementsByTagName('description')->item(0)->firstChild->nodeValue;
	$pubDate = $item->getElementsByTagName('pubDate')->item(0)->firstChild->nodeValue;
	$guid = $item->getElementsByTagName('guid')->item(0)->firstChild->nodeValue;

	$json['item'][$i]['title'] = $title;
	$json['item'][$i]['description'] = $description;
	$json['item'][$i]['pubdate'] = $pubDate;
	$json['item'][$i]['guid'] = $guid;
	$json['item'][$i]['link'] = $link;

	$i++;
	if($i == $limit) break;
}

//var_dump($json);

echo json_encode($json);


?>
