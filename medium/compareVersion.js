/* NOT FINISHED */
var compareVersion = function (version1, version2) {
        let v1 = version1.split('.');
        let v2 = version2.split('.');
        let p1 = 0; /// pointer for v1
        let p2 = 0; /// pointer for v2
        while (p1 < version1.length || p2 < version2.length) {
                if(version1.length && version2.length){
                        if(+v1[p1] < +v2[p2]) return -1
                        else if(+v1[p1] > +v2[p2]) return 1
                }
        }
};

console.log(compareVersion('1.2', '1.10'));
