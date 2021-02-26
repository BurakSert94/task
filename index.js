const biletler = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "JPN"]];

function rotaBul(biletler) {
        let cikis = [];
        let varis = [];

        biletler.forEach((bilet, index) => {
            cikis.push(bilet[0]);
            varis.push(bilet[1]);
        });
    
        let bulunanUlke = cikis.filter(source => !varis.includes(source)) [0];

        let varilanUlke = varis.filter(destination => !cikis.includes(destination)) [0];
    
        console.log(bulunanUlke, varilanUlke);
    

    const rota = [];
    rota.push(bulunanUlke);
    var temp = bulunanUlke;
        
        for (var i = 0; i < biletler.length; i++) {
        for (var y = 0; y < biletler.length; y++) {
            if(biletler[y][0] == temp){
            rota.push(biletler[y][1]);
            temp = biletler[y][1];
            }
        if (biletler[y][0] == temp) {
        rota.push(biletler[y][1]);
        temp = biletler[y][1];
        }
        }
        }
    var biletSon = rota.join(', ');

    document.write(`result: "`+biletSon+`"`);
    
};

rotaBul(biletler);
