# unifytest
Hi unifyID team, I enjoyed this challenge and completed the requirements with the bonus of creating a bitmap picture. 
Things to note:
- I would've needed 49152 random numbers to create random rgb values for all 128 pixels and this request is over the limit for the Random.org api, so instead I made enough pixels for only one side length in the bitmap and repeated the same sequence 128 times to make a square.
- I had some issue with parsing the response from Random.org so I had to rush the ending. Instead of collecting values for all 128 pixels and I ended up collecting only 127. 
- Due to the issue described above and an implementation safety measure, my bitmap image does not look like horizontal lines due to a slight offset. 

*I figured out the parsing issue literally 5 minutes after my final commit but decided not to change it to keep within the time limit of three hours (I was starting a count at 0 and going up to 128 and that's 129 numbers lol).
