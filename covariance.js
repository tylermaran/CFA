
    var limit = 50;
    var x = [];
    var y = [];

    for (let i = 0; i < limit; i++) {
        x.push(Math.floor(Math.random() * 100) + 1);
    }


    for (let i = 0; i < limit; i++) {
        y.push(Math.floor(Math.random() * 100) + 1);
        
    }

    var avgX = 0;
    var avgY = 0;
    var stdX = 0;
    var stdY = 0;

    for (let i = 0; i < x.length; i++) {
        avgX = avgX + x[i];
        avgY = avgY + y[i];
    }

    avgX = avgX / x.length;
    avgY = avgY / y.length;

    for (let i = 0; i < x.length; i++) {
        stdX = stdX + (x[i] - avgX) * (x[i] - avgX);
        stdY = stdY + (y[i] - avgY) * (y[i] - avgY);
    }

    stdX = Math.sqrt(stdX / x.length);
    stdY = Math.sqrt(stdY / y.length);



    console.log("Average value of X is: " + avgX);
    console.log("Standard Deviation of X is: " + stdX);
    console.log("Average value of Y is: " + avgY);
    console.log("Standard Deviation of Y is: " + stdY);
    var covariance = 0;

    for (let i = 0; i < x.length; i++) {
        covariance = (covariance + (x[i] - avgX) * (y[i] - avgY))

    }
    covariance = covariance / (x.length - 1)
    console.log("Covariance is: " + covariance);
    console.log("Correlation Coefficient is: " + covariance / (stdX * stdY));
