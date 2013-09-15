// Records a path, simplifies it and plays it back

(function(global, undefined) {

    function Path(startTime) {
        var self = this;

        this.points = [];
        this.currentIndex = -1;
        this.startTime = startTime || 0;
        this.length = 0;
        this.closed = false;
        this.finished = false;

        this.add = function(x,t) {
            if (self.closed)
                throw 'Error: Path already closed';
            self.points.push({x:x[0], y:x[1], z:t-self.startTime});
        };
        this.close = function() {
            if (self.closed)
                throw 'Error: Path already closed';
            self.points = simplify(self.points);
            self.closed = true;
            self.length = self.points.length;
        };
        this.next = function() {
            if (!self.closed)
                throw 'Error: Path not closed yet';
            self.currentIndex++;
            if (self.finished)
                throw 'Error: Path already finised';
            if (self.currentIndex == self.length - 1)
                self.finished = true;
            var point = self.points[self.currentIndex];
            return {x:[point.x, point.y], t:point.z};
        };
        this.reset = function() {
            if (!self.closed)
                throw 'Error: Path not closed yet.';
            self.finished = false;
            self.currentIndex = 0;
        };

    }

    global.Path = Path;

})(window);
