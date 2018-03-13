<?php
$url = "https://www.random.org/integers/?num=3&min=0&max=255&col=1&format=plain&rnd=new";
$ch = curl_init();
curl_setopt($ch, constant(curlopt_url), $url);
$result = curl_exec($ch);
curl_close($ch);
echo $result;
?>