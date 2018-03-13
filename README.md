# unifytest
Hi unifyID team, I enjoyed this challenge and completed the requirements with the bonus of creating a bitmap picture. 
Things to note:
- I would've needed 49152 random numbers to create random rgb values for all 128 pixels and this request is over the limit for the Random.org api, so instead I made enough pixels for only one row in the bitmap and repeated the same row 128 times.
- I had some issue with parsing the response from Random.org so I had to rush the ending. Instead of collecting values for all 128 pixels and I ended up collecting only 127. 
- Due to the issue described above, I slightly shortened the height and width of the resulting image so as to have no errors.

*I figured out the parsing issue literally 5 minutes after my final commit but decided not to change it to keep within the time limit of three hours (I was starting a count at 0 and going up to 128 and that's 129 numbers lol).
