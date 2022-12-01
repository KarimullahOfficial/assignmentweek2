function vowelsAndConsonants(s) {
    var atom = s.length;
    var i = 0;
    while (i <= atom)
    {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            console.log('\n' + s[i]);
        }
        else {
            console.log('\n' + s);
        }
    }

}