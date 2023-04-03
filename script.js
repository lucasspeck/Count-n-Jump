function calculate() {
    let beg = document.getElementById('beginning');
    let end = document.getElementById('end');
    let step = document.getElementById('jumpstep');
    let res = document.getElementById('res');

    if (beg.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = "Impossible to count!"
    } else {
        res.innerHTML = 'Counting:'
        let b = Number(beg.value);
        let e = Number(end.value);
        let j = Number(step.value);

        if (j <= 0) {
            res.innerText = "Error. We are considering at least 1 Step:"
            j = 1
        }

        if (b < e) {
            //Count up
            for (let c = b; c <= e; c += j) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            //Count down
        } else {
            for (let c = b; c >= e; c -= j) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}