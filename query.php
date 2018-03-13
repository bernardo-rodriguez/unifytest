<?php
$url = "https://www.random.org/integers/?num=384&min=0&col=128&max=255&format=plain&rnd=new&base=10";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
$result = curl_exec($ch);
curl_close($ch);
echo $result;
?>