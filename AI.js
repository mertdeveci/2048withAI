
//--------------------------------------------







function AICode(){
    

            // SOLA DOĞRU TOPLAMA İŞLEMİ SAYISI
           // DİKEY DOĞRULTULU TOPLAM İŞLEMİ SAYISI


    
    
    

    //game_zone_doldur(_game_zone);
    controller();
    let _1_yatay_toplam_sayisi=_1_yatay_toplam_sayisi_hesapla(game_zone());
    let _2_dikey_toplam_sayisi=_2_dikey_toplam_sayisi_hesapla(game_zone());
    


    
    console.log("_1_Yatay_Eksende_Toplama_İşlemi_Sayısı >> "+_1_yatay_toplam_sayisi);
    console.log("_2_Dikey_Eksende_Toplama_İşlemi_Sayısı  >> "+_2_dikey_toplam_sayisi);
    console.log("Sola Hareket Edebilir >"+AX_sola_hareket_edebilir_mi(_game_zone));
    console.log("Aşağı Hareket Edebilir >>"+BX_asagi_hareket_edebilir_mi(_game_zone));
    console.log("Yukarı Hareket Edebilir >>"+CX_yukarı_hareket_eder_mi(_game_zone));
    console.log("Sağ Hareket Edebilir >>"+DX_sag_hareket_eder_mi(_game_zone));
    console.log("_5_Sola_Hareket_Edilirse_Oluşacak_Yeni_İfadedeki_Toplama_İşlemi_Sayısı >> "+_5_process_left());
    console.log("_6_Aşağı_Hareket_Edilirse_Oluşacak_Yeni_İfadedeki_Toplama_İşlemi_Sayısı >> "+_6_process_down());
    console.log("_7_Yukarı_Hareket_Edilirse_Oluşacak_Yeni_İfadedeki_Toplama_İşlemi_Sayısı >> "+_7_process_up());
    console.log("_8_Sağ_Hareket_Edilirse_Oluşacak_Yeni_İfadedeki_Toplama_İşlemi_Sayısı >> "+_8_process_right());
    console.log("EKRANDA YER ALAN ÖNCEKİ ŞEKLİN DEĞERLERİ YUKARIDA VERİLDİ.");

    // BÖLÜM-1
    if(_1_yatay_toplam_sayisi==0 && _2_dikey_toplam_sayisi==0){     // <1> & <2> == 0
        console.log("_6_ >> "+_6_process_down());
        console.log("_7_ >> "+_7_process_up());
        if(_6_process_down()>_7_process_up()){
            console.log("_6_ >> "+_6_process_down());
            console.log("_2_ >> "+_7_process_up());
            if(BX_asagi_hareket_edebilir_mi()){ _B_process_down(); adder(); refresh(); return; }
            if(AX_sola_hareket_edebilir_mi()){ _A_process_left(); adder(); refresh(); return; }
            if(CX_yukarı_hareket_eder_mi()){ _C_process_up(); adder(); refresh(); return; }
            if(DX_sag_hareket_eder_mi()){ _D_process_right(); adder(); refresh(); return;}
            // OYUN BİTTİ KOMUTLARI
        }
        if(_5_process_left()>=_7_process_up()){
            if(AX_sola_hareket_edebilir_mi()){ _A_process_left(); adder(); refresh(); return; }
            if(CX_yukarı_hareket_eder_mi()){ _C_process_up(); adder(); refresh(); return; }
            if(BX_asagi_hareket_edebilir_mi()){ _B_process_down(); adder(); refresh(); return; }
            if(DX_sag_hareket_eder_mi()){ _D_process_right(); adder(); refresh(); return;}
            // OYUN BİTTİ KOMUTLARI
        }else{
            _C_process_up(); refresh(); return;
        }
    }   
    // - - - - - - - - - - - - - - - - - - BÖLÜM-1 SONU



    // BÖLÜM-2
    if(_1_yatay_toplam_sayisi==0){
       /* console.log("_7_ >>"+_7_process_up());
        console.log("_6_ >>"+_6_process_down());
        console.log("_AX_ >>"+_7_process_up());*/
        if(_7_process_up()==_6_process_down() && AX_sola_hareket_edebilir_mi()){
            if(_5_process_left()>_6_process_down()){
                _A_process_left(); adder(); refresh(); return;
            }else{
                _B_process_down(); adder(); refresh(); return;
            }
        }
        if(_7_process_up()>_6_process_down()){
            _C_process_up(); adder(); refresh(); return;
        }else{
            _B_process_down(); adder(); refresh(); return;
        }
    }
    // - - - - - - - - - - - - - - - - - - BÖLÜM-2 SONU







    if(_2_dikey_toplam_sayisi==0){  // BÖLÜM-3
        _A_process_left(); refresh(); return;
    }
    // - - - - - - - - - - - - - - - - - - BÖLÜM-3 SONU
    if(_1_yatay_toplam_sayisi==_2_dikey_toplam_sayisi){ // BÖLÜM-4
        if(_5_process_left()>=_6_process_down()){
            _A_process_left(); refresh(); return;
        }
    }
    if(_1_yatay_toplam_sayisi>_2_dikey_toplam_sayisi){
        _A_process_left(); refresh(); return;
    }else{
        if(_7_process_up>_6_process_down()){
            _C_process_up(); adder(); refresh(); return;;
        }else{
            _B_process_down(); adder(); refresh(); return;
        }
    }

    // - - - - - - - - - - - - - - - - - - BÖLÜM-4 SONU


}







// - - - - - -  CODE KISMI

function game_zone(){
    _game_zone = [   // Izgara üzerindeki değerler
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];

      for(i=0;i<4;i++){
        for(j=0;j<4;j++){
          act=document.getElementById(i+"x"+j);
          
          if(act.textContent.length==0){
              _game_zone[i][j]=-1;
          }else{
              _game_zone[i][j]=act.textContent;
          }
        }
    }

    return _game_zone;
}


function _1_yatay_toplam_sayisi_hesapla(_zone){
    yts=0;
    for(i=0;i<4;i++){
        for(j=0;j<3;j++){
            item_left=_zone[i][j];
            if(item_left==0){ continue; }
            for(k=j+1;k<4;k++){
                item_right=_zone[i][k];
                if(item_right==-1){ continue; }
                if(item_left==item_right){
                    yts++;
                }
                break;
            }

        }
    }
    return yts;
}

function _2_dikey_toplam_sayisi_hesapla(_game_zone){
    let dts=0;
    let _virtual_zone=_game_zone;
   
    for(i=0;i<4;i++){
        for(j=0;j<3;j++){
            item_up=_virtual_zone[j][i];
            if(item_up==-1){ continue; }
            for(k=j+1;k<4;k++){
                item_down=_virtual_zone[k][i];
                if(item_down==-1){ continue; }
                if(item_up==item_down){
                    dts++;
                }
                break;
            }
        }
    }
    return dts;
}

//- - - - - - -

function _A_process_left(){
    left();
    remove_theme(); 
    add_theme();
}

function _B_process_down(){
    down();
    remove_theme(); 
    add_theme();
}

function _C_process_up(){
    up();
    remove_theme(); 
    add_theme();
}

function _D_process_right(){
    right();
    remove_theme(); 
    add_theme();
}



//- - - - - - - - - 
function AX_sola_hareket_edebilir_mi(){
    _zone=game_zone();
    let AX_var=0;
    for(i=0;i<4;i++){
        for(j=3;j>0;j--){
            AX_var=_zone[i][j];
            if(AX_var==-1){continue;}
            if(AX_var==_zone[i][j-1]){
                return true;
            }
            for(k=j-1;k>=0;k--){
                if(_zone[i][k]==-1){
                    return true;
                }
            }
        }
    }
    return false;
}

function BX_asagi_hareket_edebilir_mi(){
    _game_zone=game_zone();
    let BX_var=0;
    for(i=0;i<4;i++){
        for(j=0;j<3;j++){
            BX_var=_game_zone[j][i];
            if(BX_var==-1){continue;}
            if(BX_var==_game_zone[j+1][i]){
                return true;
            }
            for(k=j+1;k<4;k++){
                if(_game_zone[k][i]==-1){
                    return true;
                }
            }
        }
    }
    return false;
}

function CX_yukarı_hareket_eder_mi(){
    _game_zone=game_zone();
    let CX_var=0;
    for(i=3;i>0;i--){
        for(j=0;j<4;j++){
            CX_var=_game_zone[i][j];
            if(CX_var==-1){continue;}
            if(CX_var==_game_zone[i-1][j]){
                return true;
            }
            for(k=i-1;k>=0;k--){
                if(_game_zone[k][j]==-1){
                    return true;
                }
            }
        }
    }
    return false;
}

function DX_sag_hareket_eder_mi(){
    _game_zone=game_zone();
    let DX_var=0;
    for(i=0;i<4;i++){
        for(j=0;j<3;j++){
            DX_var=_game_zone[i][j];
            if(DX_var==-1){continue;}
            if(DX_var==_game_zone[i][j+1]){
                return true;
            }
            for(k=j+1;k<4;k++){
                if(_game_zone[i][k]==-1){
                    return true;
                }
            }
        }
    }
    return false;
}

//- - - - - - -

function _5_process_left(){    // SUM-TO-LEFT
    let _virtual_game_zone=game_zone();
    for(a=0;a<4;a++){ 
        for(b=0;b<3;b++){
            let left=_virtual_game_zone[a][b];
            if(left==-1){continue;}
                for(c=b+1;c<4;c++){
                    let right=_virtual_game_zone[a][c];
                    if(right==-1){continue;}
                    if(left==right){
                        _virtual_game_zone[a][c]=-1;
                        _virtual_game_zone[a][b]*=2;
                        break;
                    }else{
                        break;
                    }
            }
        }
    }
    for(a=0;a<4;a++){
        for(b=3;b>0;b--){
            if(_virtual_game_zone[a][b]==-1){ continue; }
            if(_virtual_game_zone[a][b-1]==-1){
                _virtual_game_zone[a][b-1]=_virtual_game_zone[a][b];
                _virtual_game_zone[a][b]=-1;
                b=3;
                a=0;
             }
        }
    }

    let yatay_toplam=_1_yatay_toplam_sayisi_hesapla(_virtual_game_zone);
    let dikey_toplam=_2_dikey_toplam_sayisi_hesapla(_virtual_game_zone);
   // console.log("SOLA Hareket edersen sonraki adımda sola edebilir:>>"+AX_sola_hareket_edebilir_mi(_virtual_game_zone));
   //console.log("SOLA Hareket edersen sonraki yatay hamle sayısı:>>"+_1_yatay_toplam_sayisi_hesapla(_virtual_game_zone));
   //console.log("SOLA Hareket edersen sonraki dikey hamle sayısı:>>"+_2_dikey_toplam_sayisi_hesapla(_virtual_game_zone));
    return yatay_toplam+dikey_toplam;
}

function _6_process_down(){    // SUM-TO-DOWN
    let _virtual_game_zone=game_zone();
    
    for(b=0;b<4;b++){
        for(a=3;a>0;a--){ 
            let down=_virtual_game_zone[a][b];
            if(down==-1){continue;}
                for(c=a-1;c>=0;c--){
                    let up=_virtual_game_zone[c][b];
                    if(up==-1){continue;}
                    if(up==down){
                        _virtual_game_zone[a][b]*=2;
                        _virtual_game_zone[c][b]=-1;
                        break;
                    }else{
                        break;
                    }
                }
        }
    }



    for(a=3;a>=0;a--){   
        for(b=0;b<4;b++){
            _empty=_virtual_game_zone[a][b];
            if(_empty==-1){
                for(c=a;c>=0;c--){
                    _dolu=_virtual_game_zone[c][b];
                    if(_dolu!=-1){
                        _virtual_game_zone[a][b]=_virtual_game_zone[c][b];
                        _virtual_game_zone[c][b]=-1;
                        break;
                    }
                }
            }
        }
    }
    

    let yatay_toplam=_1_yatay_toplam_sayisi_hesapla(_virtual_game_zone);
    let dikey_toplam=_2_dikey_toplam_sayisi_hesapla(_virtual_game_zone);
   //console.log("ASAGI Hareket edersen sonraki yatay hamle sayısı:>>>"+yatay_toplam);
   //console.log("ASAGI Hareket edersen sonraki dikey hamle sayısı:>>"+dikey_toplam);
   return yatay_toplam+dikey_toplam;
}

function _7_process_up(){      // SUM-TO-UP
    let _virtual_game_zone=game_zone();

    for(a=0;a<4;a++){  
        for(b=0;b<4;b++){
            let up=_virtual_game_zone[a][b]; // x=up
            if(up==-1){continue;}
                for(c=a+1;c<4;c++){
                    let down=_virtual_game_zone[c][b];  // down=y
                    if(down==-1){continue;}
                    if(down==up){
                        _virtual_game_zone[a][b]*=2;
                        _virtual_game_zone[c][b]=-1;
                        break;
                    }else{
                        break;
                    }
                }
        }
    }

    for(b=0;b<4;b++){
        for(a=3;a>0;a--){
            if(_virtual_game_zone[a][b]==-1){continue;}
            if(_virtual_game_zone[a-1][b]==-1){
                _virtual_game_zone[a-1][b]=_virtual_game_zone[a][b];
                _virtual_game_zone[a][b]=-1;
                b=0;
                a=3;
            }
        }
    }


    let yatay_toplam=_1_yatay_toplam_sayisi_hesapla(_virtual_game_zone);
    let dikey_toplam=_2_dikey_toplam_sayisi_hesapla(_virtual_game_zone);
   //console.log("YUKARI Hareket edersen sonraki yatay hamle sayısı:>>>");
   //console.log("YUKARI Hareket edersen sonraki dikey hamle sayısı:>>");
   return yatay_toplam+dikey_toplam;
}

function _8_process_right(){  // SUM-TO-RIGHT
    let _virtual_game_zone=game_zone();

    for(i=0;i<4;i++){
        for(j=3;j>0;j--){
            let right=_virtual_game_zone[i][j];
            if(right==-1){ continue;}
                for(c=j-1;c>=0;c--){
                    let left=_virtual_game_zone[i][c];
                    if(left==-1){continue;}
                    if(right==left){
                        _virtual_game_zone[i][j]*=2;
                        _virtual_game_zone[i][c]=-1;
                        break;
                    }else{
                        break;
                    }
                }
        }
    }
    
    for(a=0;a<4;a++){
        for(b=0;b<3;b++){
            if(_virtual_game_zone[a][b]==-1){continue;}
            if(_virtual_game_zone[a][b+1]==-1){
                _virtual_game_zone[a][b+1]=_virtual_game_zone[a][b];
                _virtual_game_zone[a][b]=-1;
                b=0;
                a=0;
            }
        }
    }

    let yatay_toplam=_1_yatay_toplam_sayisi_hesapla(_virtual_game_zone);
    let dikey_toplam=_2_dikey_toplam_sayisi_hesapla(_virtual_game_zone);
    // console.log("SAG Hareket edersen sonraki yatay hamle sayısı:>>"+_1_yatay_toplam_sayisi_hesapla(_virtual_game_zone));
    // console.log("SAG Hareket edersen sonraki dikey hamle sayısı:>>"+_2_dikey_toplam_sayisi_hesapla(_virtual_game_zone));
    return yatay_toplam+dikey_toplam;
}





    var myVar=0;
    function start(){
        myVar=setInterval(AICode,1000);
    }

    function stop(){
        clearInterval(myVar);
    }
    
