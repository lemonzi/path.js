Path.js
======

Path.js is a very small JS module that allows you to record any sequence of data points and play it back afterwards.
When the recording is finished, the data is cleaned and only the relevant keypoints are kept.
In that way, the resulting sequence is smoother and takes less memory.

The most common use case is recording a 1D signal (such as the value of a slider) or a 2D signal (such as the position of the mouse) along with time.
This allows you to record gestures and play them back, as well as potentially save them to a server and match them with a database.


