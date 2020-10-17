/*

MAP SYMBOLS:
♀ : player spawn point
= : brick
c : cliff
g : tall grass
G : gravestone/tombstone
h : hen/chicken
k : kitty
p : path/cobblestone
r : rock
^ : roof shingles
t : small tree
T : big tree
+ : dead tree
w : water
0 : door to current world level 0
1 : door to current world level 1
2 : door to current world level 2
3 : door to current world level 3
4 : door to current world level 4
5 : door to current world level 5
6 : door to current world level 6
7 : door to current world level 7
8 : door to current world level 8
9 : door to current world level 9
① : warp to world 1-0

*/
let maps = [

  [  // begin world 0
          // world 0 level 0, grass background tile
      {
        showTitleScreen:true,
        bgImage:"grass", //either "grass", "sand", "cave"
        map:[
          "     grrcccccccccccc+t+ ++T++  +++ ++T+ T+++ ++T+ ^^^==========================    ", 
          "g    gr       gT  ++   +Tg   ++T  +    + gT +  gr+^^^ggggggggg             T       ", 
          " gT TTT     k   h    r         +G   G  gGgg G+g   ===  pppppp            tTTtTt    ", 
          " gTTTgr t  t t k  t      h           g            =7=  p        TttT   tTTtTT      ", 
          "   gg r   t  gt  t+ g  r      + G  gG   G  + ppppppppppp tT    TtTt   TTtTtTTtTT   ", 
          "   Tg  r   t T    ++  t          +    +  T  G   ^^^ gp ttT   ttTTtT  TtTTtTT       ", 
          " g TT r  t    t  gt g          g+gg G  +Gg  +g ^^^^^ p TtTt    ^^^   tTtTTtTT      ", 
          "  ggT r t t^   +   gT               g+     +  g=|=|= p  t tT   ^^^    tTt          ", 
          "   gTTr   ^^^     gt r      gTg  + gG + G     t===== p tTT     ===    TTtTt        ", 
          "    gTT  ^^^^^   ^^^         ^^^              t==6== p  TtT    =8=   TtTt          ", 
          "  ggggT  =|=|=  ^^^^^r     g^^^^^    ^^^     gr  ppppp   tTTt  pp T   TtTT         ", 
          " Tg g T T=====  =====    rr =====rg ^^^^^        +gg pg  Tt  ppp tTTT   tTtTtwwwww ", 
          " T  ggr T=1===  ==2==r  rccc==4==T  =====g   t    t  p  TTtTtp  TTtTTtT   twww     ", 
          " T T gr   ppppppppppppprcc3ccrp     ==5==          T pp grT  p g         www       ", 
          " TTT  gccccccccccccccgpp ggg  pgg   tgpt Tgt  ppppt   p  TTTtp  TtTTtTwwwwTtTT     ", 
          "   TTTt   g  T         ppppppppppp+tppppppppppp tpptggpppppppp tTtT+wwwtTTtT       ", 
          "ggg T  t           T    gg   gr  pppp++g  t   tg gpppppgtgtgtTtTTtwwwTtTtT         ", 
          "ppggg t         k               t+g t gt gtgt  gT  +   T   TtT+TwwwTTtTtTTtTtTTtT  ", 
          "ggppgggTg     Tg     h        tg  +tg t gT    gT     Tg T+T TtwwwTtTtTtTtT+T T     ", 
          " ggpppgr          h               gt    +t gt  gtT g+ Tg tTTwwwTTtTtT+T TtTTtT     ", 
          "TTgggpp7              k  Tg   gg   Tg       t+           gTwwwTtTTtTtTtTtTTtTtT    ", 
          " T Tgggt   ♀       gg                     T       T     twwtTTtT tTTtTtTtTTtT      ", 
          "  TTTTTgt         T                  tg T  gT   T      TwwTtTTtTtTTtTtTtTTtT       ", 
          "  T   g  tcccc ccc ccccc   gTrrg  t    t   +++T      gTwwTtTtTTtTtTTtTtTTtTTtT     ", 
          "       g  TrrTT    T +T cccc   +++ +++t +++   +++++T++wwtT+T TT+T TtTTtTTT tTTT    "]
      },
      // world 0 level 1, cave background tile
      {
        showTitleScreen:true,
        bgImage:"cave", //either "grass", "sand", "cave"
        map:[
      "|||||||||||||||||||||||||||||||||||||||||||||||",
      "|||||||||||||||||||||||||||||||||||||||||||||||",
      "|||||||||||||||||||||||||||||||||||||||||||||||",
      "|||||||||||||||||||||||||||||||||||||||||||||||",
      "|||||||||||||||||||||||||||||||||||||||||||||||",
      "||||||||===============================||||||||",
      "|||||||=         =                     =|||||||",
      "|||||||=     =   =     ===========     =|||||||",
      "|||||||=     =         =         =     =|||||||",
      "|||||||=== ========== ==== === ===== ===|||||||",
      "|||||||=     = ===     =     = = =     =|||||||",
      "|||||||=     = = =           =r  =     =|||||||",
      "|||||||=     =   =     =     =   =     =|||||||",
      "|||||||== ===== ============== ======= =|||||||",
      "|||||||=     =         =         =     =|||||||",
      "|||||||=     =   =     =     =   =     =|||||||",
      "|||||||=     =   =           =   =     =|||||||",
      "|||||||==== === ============== === =====|||||||",
      "|||||||=     =   =           = = =     =|||||||",
      "|||||||=     =   =     =     =   =     =|||||||",
      "|||||||=         =     =     =   =     =|||||||",
      "|||||||== =========== ==== =========== =|||||||",
      "|||||||=     =         =     =         =|||||||",
      "|||||||=         =     =         =     =|||||||",
      "|||||||=     =   =     =     =   =     =|||||||",
      "||||||||============================♀==||||||||",
      "|||||||||||||||||||||||||||||||||||=0=|||||||||",
      "|||||||||||||||||||||||||||||||||||||||||||||||",
      "|||||||||||||||||||||||||||||||||||||||||||||||",
      "|||||||||||||||||||||||||||||||||||||||||||||||",
      "|||||||||||||||||||||||||||||||||||||||||||||||",
      "|||||||||||||||||||||||||||||||||||||||||||||||",]
  },
     // world 0 level 2, cave background tile
     {
       showTitleScreen:true,
       bgImage:"cave", //either "grass", "sand", "cave"
       map:[
"|||||||||||||||||||||",
"|||||||||||||||||||||",
"|||||||||||||||||||||",
"|||||||||||||||||||||",
"|||||||||||||||||||||",
"|||||||=======|||||||",
"||||||=   =   =||||||",
"||||||= ===== =||||||",
"||||||=   =   =||||||",
"||||||=== = ===||||||",
"||||||=   =   =||||||",
"||||||= ===== =||||||",
"||||||=       =||||||",
"|||||||===♀===|||||||",
"||||||||||0||||||||||",
"|||||||||||||||||||||",
"|||||||||||||||||||||",
"|||||||||||||||||||||",
"|||||||||||||||||||||"
]
},



      // world 0 level 3, by https://github.com/hgcassiopeia
      {
        showTitleScreen:true,
        bgImage:"cave", //either "grass", "sand", "cave"
        map:[
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "r         k                                                     rr",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr   rrrrrrr",
      "rr                                  k                           rr",
      "rrrrrrrrrrrrrrrrrrrrrrrr    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rr                                   k                          rr",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr♀rrrrrrrrrrrrrrrrrrrrrrrrr     rr",
      "rrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrr0rrrrrrrr rrrrrrrrrrrrrrrrrr   rr",
      "rrrrrrrrrr1rrrrrrrr rrrrrrr1rrrrrrrrrrrrrrr1rrrrrrrrrrrrrrrrrrr rr",
      "rr                     k                                        rr",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr   rr",
      "rr      k                                                       rr",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"]
    },


      // world 0 level 4, by https://github.com/GudeTamma
      {
        showTitleScreen:true,
        bgImage:"grass", //either "grass", "sand", "cave"
        map:[
      "ccccccccccccccccccccccccccccT+Tccccccccccccccccccccccccc",
      "cccc  Tgggggggggggggggg  TTT   TTT      gggggggggggggggc",
      "cccc                       T   T                       c",
      "ccccr              ^           k        ^              c",
      "cccc        ^========                  ========^       c",
      "ccccr              =             k      =              c",
      "cccc               =                    =              c",
      "cccc               =                    =              c",
      "ccccTt             =====            =====              c",
      "ccccrr                 =            =                  c",
      "ccccr                  =            =                  c",
      "ccccr      k           =            =                  c",
      "cccct                  =            =                  c",
      "cccctt                 =            =    T             c",
      "ccccttt      k         =            =                tTc",
      "ccccrr                                              rrrc",
      "cccccccccc  cccccccc           k        cccccccccccccccc",
      "ccccccccc  ccccccccc                    c              c",
      "ccccccc   cccccccccc                    c              c",
      "ccccccccc   cccccccc                    c              c",
      "ccccccccccc  ccccccc                    c              c",
      "cccccccccc  cccccccc                    c              c",
      "ccccccccc  ccccccccc        k           c              c",
      "ccccccc   ccccccccccggggg         ggggggc              c",
      "ccc==== ♀ ===cccccccTt    T     T  T  tTc              c",
      "ccc=====0====ccccccccccccccTT TTcccccccccccccccccrrrrrrr",
      "||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
    "||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
  "||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
"||||||||||||||||||||||||||||||||||||||||||||||||||||||||"]
},
      // world 0 level 5
      {
      showTitleScreen:true,
      bgImage:"sand", //either "grass", "sand", "cave"
      map:[
"wwwwwwwwwwwwwwwwwwwwwwttwwww",
"wwwwwwwwwwwwwwwwwwwwwtrrtwww",
"wwwwwwwwwwwwwwwwwwwwwrTtrwww",
"wwwwwwwwwwwwwwwwwwwwwwrTwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwww   ggg  gg wwwwwwwwww",
"wwwwwwwww g gg+ggg  g wwwwwwwww",
"wwwwwwwww+       ggg g wwwwwwww",
"wwwwwwwwg  ^^^  ggg+g  wwwwwwww",
"wwwwwwww k ^^^ ghgggg gwwwwwwww",
"wwwwwwww+  === gg+  g  wwwwwwww",
"wwwwwwww g =0=g gggg+g wwwwwwww",
"wwwwwwwwc g  gg  gg    wwwwwwww",
"wwwwwwwwccgg gkg  gg  cwwwwwwww",
"wwwwwwwwwcc g    ♀   ccwwwwwwww",
"wwwwwwwwwwccccccr0rcccwwwwwwwww",
"wwwwwwwwwwwccccccrcccwwwwwww",
"wwwwwwwwwrwwwwwwcccwwwwwwwww",
"wwwwwwwwwwwwwwwwwcwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwww"]
      },
      // world 0 level 6
      {
      showTitleScreen:true,
      bgImage:"sand", //either "grass", "sand", "cave"
      map:
[
"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwT①Tggg wwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwww ggg  gggwwwwwwwwwwwg ggwwwwwwwwwww",
"wwwwwwwwwwc  cccc ggwwwwwwwwg gggg gwwwwwwwww",
"wwwwwwwwwwcccccccc gwwwwwwgT gg   gcwwwwwwwww",
"wwwwwwwwwwcccccccc ggwwwwgg gg g cccwwwwwwwww",
"wwwwwwwwwwwccwwwwc g wwwg ggg ccccccwwwwwwwww",
"wwwwwwwwwwwwwwwwww ggggg  gg  cccccwwwwgwwwww",
"wwwwwwwwwwww  wwwrggggggggT g cccwwwwwgggwwww",
"wwwwwwwwwww gg wwgggg Tg ggg gwwwwwwwgrgwwwww",
"wwwwwwwwwwggg ggg gggg gggg g wwwwwwwwgwwwwww",
"wwwwwwwwwgg cc gggTg ggg gggg gwwwwwwwwwwwwww",
"wwwwwwwwwggcccc g gggg gg ggggg wwwwwwwwwwwww",
"wwwwwwww ggcccccggggggggggggTggggrwwwwwwwwwww",
"wwwwwwwwgggcwwcccgggggg  gg g gggggwwwwwwwwww",
"wwwwwwww  gwwwwcccgggg ggTgg  ccggggwwwwwwwww",
"wwwwwwwwc gwwwwwccc ♀ g g g gccccggggwwwwwwww",
"wwwwwwwwc   wwwwwccr0rcgggggcccccc ggwwwwwwww",
"wwwwwwwwccggggwwwwccrccc ggcccwwccc cwwwwwwww",
"wwwwwwwwwc  gg wwwwccccccccccwwwwccccwwwwwwww",
"wwwwwwwwwcc ggcwwwwwcwwcccccwwwwwwcccwwwwwwww",
"wwwwwwwwwwcccccwwwwwwwwwcccwwwwwwwwcwwwwwwwww",
"wwwwwwwwwwcccccwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwcccwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"]
      },
      // world 0 level 7
      {
      showTitleScreen:true,
      bgImage:"grass", //either "grass", "sand", "cave"
      map:[
        "gggggggggggggggggggggggggggggggggggggggggggggggggT ", 
        "gggggggggggggggg+gggTTggggggTTgggg+ggggggggTgggggg ", 
        "ggggTTggggTgggggggTTTTTggTTTggTggggTgtggTTTTgggTgT ", 
        "gggggTTgggTTgTTgTTTTggTgTTgTgTTTTTTTTgTTTTTTTggggT ", 
        "ggTgggTTggTg+gTTggg+gtTTTTTTgtggTgggTgtgggggTTggTT ", 
        "ggTTgggTTTTgggtgggtggggTTggggg+ggTggTgg+gggggtgggg ", 
        "gggggggggTggT+gg+gTgTgTTTtTgTTTgTTgTTTgggTTTTggtgg ", 
        "gggggggg+gg+ggTTgTgggtgggggtg+gggttgg+gggTTgTggTgT ", 
        "ggTTTgggggtTgggggggg+ggggggggggggggggggTggTTTgTTgT ", 
        "ggggTgTTTTgT+ggggggggggtggggppppppgggTgTTTTTTTTTgT ", 
        "gggTTTTggTgTggggtggggggggggppggggppp+TTgggggTggggg ", 
        "gggTTTTTgTggggggggggrgggppppggrggggpgTgTggpggggggg ", 
        "gpgpgggTggTTgggggggggggpppgggggggtgp♀0gppppppppppp ", 
        "ppppppgpppgTgpgppppgggppggtgggtggggpptppgpgggpggpp ", 
        "gggTgpppgpp8pppptgpppppggggggggggggggTgTgTTTTggTgg ", 
        "ggTTTgggTTTtggggggggggggggtggggggggg+ggTTTggTTgTTg ", 
        "gTTgTTgTTgt+gggggrgggTgtggggtgggtggg+gggTTgggTTTTg ", 
        "TTgggTTTgggg+TtTTggtrgTggTTggTTTgTgTTTgggTTgTTTTgg ", 
        "Tgg+ggTgg+ggggggggggggggggggtggTgggTggTgggTTTggggT ", 
        "TTggTgtgggTtgTTggTTggtgTTggggggTTggTtgTgT+gggggggg ", 
        "gTTggTgtgTTgggTTggTTggTTgg+gTTgg+gTTggTggg+gggTggg ", 
        "ggTTggggTTggTggggtgTTTTTgggTTTTgggTgggTTgTTTggTgTg ", 
        "gggggggTTgtgTTTgTgggggggTgTTggTTTTTggggTTTTgggTgTT ", 
        "ggg+ggTTgggtggTgggggTTTTgTTggggggTggggggggggggTggT ", 
        "gggggggggg+gggTTggTTTgggTTggggTTTTTTgggggTTTTggggg ", 
        "gggggggggggggggTTTTTgggggggggggggggggggggggggggggg "]
      },
      // world 0 level 8
      {
      showTitleScreen:true,
      bgImage:"grass", //either "grass", "sand", "cave"
      map:[
        "gggggggTTTgggTTggggggg", 
        "gTTgggTTgTgTTTTTTTgTTg", 
        "TTTggggtggggggtggTTTgT", 
        "ggTTgTTggTTTTttTTgggTT", 
        "gggggTtgT    TgggggTTg", 
        "TTTgtggT  ggg TgggTTgg", 
        "ggTgggT  +  gg TTgpppp", 
        "ggTTgTTg G    ♀7pppgpp", 
        "gTTgTTgT  ggg pppTTggg", 
        "gTggTgggT gg TTTTTTTgg", 
        "TTggggTggTTTTggggggTTg", 
        "ggTTgTTgtgttggTTggggTg", 
        "ggggTgggggTTTggTTTTggg", 
        "TgggTTgggTTTTggTTgTTgg"]
      },
      // world 0 level 9
      {
      showTitleScreen:true,
      bgImage:"sand", //either "grass", "sand", "cave"
      map:[]
      }


  ], // end world 0
  [
    // begin world 1
    // world 1 level 0
    {
      showTitleScreen:true,
      bgImage:"grass", //either "grass", "sand", "cave"
      map:[
    "TTtTT+T TtT+T tTtTtT tT+TtT+TtT+TtT+T   tTTt^^^   ^^^ccctT+TtT+TtTt T+TtT+TtT tT",
    "t     T+TtT+TtTtTTtT+T tT+TtTT       TtT    ^^^   ^^^   T          tT tTTtT tT+TtT+TtT+TtT tT+TT tT tTTtT+TtT tTtT+TtT tT",
    "t     tTT   tT+TtTTtT+TtTTtTT               ===^^^===     ^^^^^^^^     TtT+TtTT tTtTtT tT+TtT+TtT+TtT+T tT+TtT+TtT+TtT+T tT+TtT+TtTtT",
    "Tt     Ttt T  TtT+TtT+TTtTtT                =|=^^^=|=     ==|===|=            TtT+T tT+TtT+TtTT tT tTTtT tT+TtT+TtT+TtT tTTtT tTTtT+TtT tTtT+TtT tT",
    "TT     T  TtTtTTtT+T tT+TtT                 =========     ====3===              TTtTT tT tTTtT tT+TtT+TtT+TtT tT+TT tT tTTtT+TtT tTtT+TtT tT",
    "T     TtT  TT tT+TtT+TtT+Tt              ^^^=|=|=|=|=^^^      ppppppppppppppppppppppppppppppppppppppppppppppppp tT+T tT+TtT+TtT+TtT+T tT+TtT+TtTtT",
    "t      TT TTtTTtT+TTt   Tt   ^^^^^^^^    ^^^====2====^^^      p         TtT     tTt  TtT  T tT tTTtT tT+TtT   g    T+TtT tTTtT tTTtT+TtT tTtT+TtT tT",
    "T      TtT tT   TtTtTTtT+T   =|===|==    =|==|= p =|==|=      p               tTtTTtT+TtTTTtT tTTtT tTT T tt     g  T TTtT tT+TT tT tTTtT+TtT tTtT+TtT tT",
    "TT     tTTtTTt T  TTtT+T=    ===1====    ====== p ======      p             TTtT+TtT+TtTT tTtTtT tTtTtT tTT TtT    gg    g      tT+TtT+T tT+TtT+TtTtT",
    "t     TtT  TTtT+TtTtT+T=        p       =      kp    k  =     p          T+TtTtTTtT+T tTT               +  tTTtt gg    gG G GgG+GTG G  TtT tTTtT tTTtT+TtT tTtT+TtT tT",
    "t=   =TTtTrt   TtTTt  T=        p        = k    p      =      p       TTtT tTTtT+T tT+T   ^        t+      +  TTt  gg +   g    g   gg   ttTTtT tTTtT+TtT tTtT+TtT tT",
    "T=   =tT   TtT+Tt   T+T=        p       T ===== p ===== T     p    T+TtT+TtTT tTtttT+    ^^^        Tt   +      +      G gG  G  G  G  G  g  TtT+TtT+T tT+TtT+TtTtT",
    "t=   =T tT+TtTtT TtT+TT=  T     p               p             p TtTT tT+TtT+T tT tTT    ^^^^^        tT      +T  +  g+       gg  + g   + gg tT+TtT tTtT+TtT tT",
    "T=    =================         ppppppppppppppppppppppppppppppp+TtT+TtTT tTTtT tT+T     =====         TtT  +      T+G G G+G G G G G Gg   +  TtT tTtT+TtT tT",
    "T=                                                        TtT+TtTT tTtTtT+TtT+TtT+      =|=|=          TTtT   +   g    +   +    g   + gg   TT tT+TtT+TtTtT",
    "T=                                   t  tTTtTT tTtT  T+TtTTtT+TtTTtT+TTtT+TtT+TtTT      =====          tTtTtt  g +   G  G  G  G  G+G   +  tT+TtT+TtT+T tT+TtT+TtT+TtT+T tT+TtT+TtTtT",
    "tT==================================T tTtT+TtT+TTtTtTTtT+T tT+TtT+T tT tTTtT tT+TtTT    =|=|=          TtTTtT+T    g  gg   +  g  4   g   tT tTTtT+TtT tTtT+TtT tT",
    "tTTtTT tT  TtT  tTT  +TtT   +TtT  tTT tTtTtT tT+TtT+TtT+TtT+TtttT+TtT+TtT+T+T T+TtT+TT  =====          tTtTtTTtTT  +g G G G G G+G Gg    TTtT+TtTtTtT",
    "TTtT+TTtT+TtT tTtTtT tT+TtT+TtT+TtT+T   tTTt   ccctT+TtT+TtTTtT+TtTTtT+TtTTtT+TtT+TtTTtT==5==         T+TtTTtTtTTtt  +   gg  +   g    TTtT+TTtT+TtT tT",
    "TtT+TtTTtT+TtTTtT+TtT+TtTT tTtTtTTtTT tTtTTtT+TtTTtT+TtT+TtT+TtTT tTtTtT tT+TtT+TtT+TtTT            TtT+TtTtTTtT+T tT    G  G  G    tTTtT+TtT tT+TtT+T+T T+TtTTtT+TtTTtT+TtTtTtT",
    "tTtT+TtTTtT+TtT+TtTT tTtTtTTtTT tTtTTtT+TtTTtT+TtTTtT+TtT+TtTT tTtTtT tT+TtT+TtT+TtT+T tTT        TtT+TtTTtT+TtTT tTTtT++        TtTtT+TtTTtT+TtTtTtT",
    "TtT+TtTTtT+TtTTtT+TtT+TtTT tTtTtTTtTT tTtTTtT+TtTTtT+TtTTtT+TtT+TtTT tTtTtT tT+TtT+TtT+TtT+T tT+TtT+TtT+TtT+T+T T+TtTTtT+T tT tTTtT tT+TtT+T+T T+TtTTtT+TtTTtT+TtTtTtT",
    "tTtT+T TTtT+T TTtT+T TtT+TT tTtTtTTtTT tTtTTtT+T TTtT+T TTtT+tT+TT tTtTtT tT+T TtT+TtT+TTTtTtT+T+T TTT+T TtT+TTtT+T TTTT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT",
    "tT tTTtT+T TT tTtTtTTtTT tTtTTtT+T TTtT+T TTtT+T TtT+TT tTtTtT tT+T TtT+TtT+TTT tT+T TtT+TtT+TTT+T TtT+TTtT+T TTtT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT",
    "T tT+T TTtTTtTtTTtT+T TtT+TT tTtTtTTtTTttttTtTTtT+T TTtT+T TTtT+T TtT+TT tTtTtT tT+T TtT+T+T TTT tT+T TtT+T+T TTT+T TtT+TTtT+T TTtT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT",
    "TtT tTT tTTtTtTTtTTtT+T TtT+TT tTtTTTtT+T TTtT+T TTtT+T TtT+TT tTtTtT tT+T TtT+T+T TTT tT+T TtT+T+T TTT+T TtT+TTtT+T TTtT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT",
    "TtTtTtTtTT tTTtTtTTtTTtTtT+T TT tTtTtTtTTtT+T TTtT+T TTtT+T TtT+TT tTtTtT tT+T TtT+T+T TTT tT+T TtT+T+T TTT+T TtT+TTtT+T TTtT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT",
    "TtTtTtTtTTtTtTtTtTTtTtTTtTtTtTtTT tTtTtTTtTT tTtTTtT+T TTtT+T TTtT+T TtT+TT tTtTtT tT+T TtT+T+T TTT tT+T TtT+T+T TTT+T TtT+TTtT+T TTtT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT"]
  },
    // world 1 level 1, by https://github.com/gersongams
    {
      showTitleScreen:true,
      bgImage:"grass", //either "grass", "sand", "cave"
      map:[
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    "r                            kTTTT                               TTT G         kr",
    "r                             TTTT                               TTT            r",
    "rTTTTTTTTTTTTTTTT     TTTT    TTTT     TTTTTTTTTTTTTTTTTTTT      TTTk           r",
    "r           kTTTT     TTTT    TTTT     TTTTTTTTTTTTTTTTTTTT      TTTTTTTTTTTT   r",
    "r            TTTT     TTTT    TTTT     TTT k    TTTT             TTTTTTTTTTTT   r",
    "r    TTTTTTTTTTTT     TTTT    TTTT     TTT      TTTT               TTTT   TTT   r",
    "r                  ♀  TTTT    TTTT     TTT      TTTT               TTTT   TTT   r",
    "r                ==0==TTTT    TTTT     TTT                         TTTT   TTT   r",
    "rrTTTTTTTTTTTTTTT=====TTTT    TTTT     TTT              TTTT       TTTT   TTT   r",
    "rrTTTTTTTTTTTTTTTTTTTTTTT     TTTT     TTT G            TTTT       TTTT   TTT   r",
    "r                             TTTT     TTT             kTTTT       TTTT   TTT   r",
    "r                   TT        TTTT     TTTTTTTTTTTTTTTTTTTTT       TTTT   TTT   r",
    "rTTTTTTTTTTTTT      TT                 TTTTTTTTTTTTTTTTTTTTT       TTTT   TTT   r",
    "r         kTTT      TT                                    TT       TTTT   TTT   r",
    "r G        TTT      TT                                    TT       TTTT   TTT   r",
    "r          TTT      TT k                TTTT              TT       TTTT         r",
    "rk         TTT      TTTTTTTTTTTTTTTTTTTTTTTT              TT       TTTT         r",
    "rTTT       TTT                                            TT       TTTT         r",
    "rTTT       TTT          k               +          k      TT       TTTT         r",
    "rTTT       TTT                                            TT       TTTT   TTTTTTr",
    "rTTT       TTTTTTT                                        TT       TTTT   TT    r",
    "rTTT       TTTTTTT      TTTT      TTTTTTTTTTTTTTTTTTTTTTTTTT       TTTT   TT  G r",
    "rTTT                    TTTT                                       TTTT   TT    r",
    "rTTT                    TTTT                                       TTTT   TT    r",
    "rTTTTTTTTTTTTTTTTT      TTTT                                       TTTT   TT    r",
    "r              TTT      TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT      TTTT   TT    r",
    "r              TTT      TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT       TT    TT    r",
    "r                                                                               r",
    "rTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT                                              r",
    "r    k    TTT^^^^^^TT   TTTTTTTTTT            TTTT    TTTTTTTTTTTTTTTTTTTTTTTTTTr",
    "r k  G  k TTT======TT                         TTTT    TTTTTTTTTTTTTTTTTTTTTTTTTTr",
    "r         TTT==6===TT                         TTTT                       TTTk   r",
    "r   TTTTTTTTT      TTTTTTTTTTTTTTT            TTTT                       TTT  G r",
    "r   TTTTTTTTT      TTTTTTTTTTTTTTT            TTTTTTTTTTTTTTTTTTTTTT     TTT    r",
    "r                                             TTTTTTTTTTTTTTTTTTTTTT     TTT    r",
    "r                                                                               r",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"]
  },
    // world 1 level 2, by https://github.com/emo8355
    {
      showTitleScreen:true,
      bgImage:"grass", //either "grass", "sand", "cave"
      map:[

      "TtTttTtTtTTtttTTtTTttTtTtTTttTTTT",
      "t          T k T k T k T k T k tT",
      "T     t      T   T   T   T     TT",
      "T     T                        4 ",
      "t     tTtTtTtttTttttTttTtttTTttTT",
      "T     T",
      "T     T",
      "T     T",
      "T     TTtTtttTTTtTttTtTTtTttTTTTtTttTtTTtTtttTTTtTttTtTTtTttTTT",
      "t                k                                            T",
      "T     +++++++++++                    TtT                      T",
      "T                +                   TkT                      T",
      "t                 +                  ttT                      T",
      "T                  +++++++++++++++++++++++++++++++++++++++++++T",
      "T                                                             T",
      "TTtTttTtTTtTttTTTtttttTtTTtTtttTTTtTttTtTTtTttTTTTttT TtTTtTttT",
      "T                                                             T",
      "TttTTTtTttT       tTt        ttTtTt     t        tt          kT",
      "T  1 T     T      ttT       TtT        TTT      tTtT        kT",
      "T    T     T      TtT       tTT        TtT      tTtT         kT",
      "T                 TtT       TTT        TtT1     tTtTk k k k k T",
      "tTTTttttTtTtTTttTTTtT   k   TTtTTtTtTTttTTTtTTtTTtTtTTtTTTTttTT",
      "TTtTTtTtTTtTTTTtTTtTTtTtTTttTTTtTTtTTtTtTTtTTTTtTTtTTtTtTTtTTTT"]
  },
      // world 1 level 3, by https://github.com/not-arzuaga
      {
        showTitleScreen:true,
        bgImage:"cave", //either "grass", "sand", "cave"
        map:[

      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "r                rrrrrrrrr        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "r                rrrrrrrrrr      rrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwrrrrrr",
      "r  rrrrrrrrrrrr  rrrrrrrrrrr    rrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwrr",
      "r  rrk      rrr  rrrrrrrrrrrr  rrrrrrrrrrrrrrrrww             wwrr",
      "r  rrrrrrr  rrr  rrrrrrrrrrrr  rrrrrrrrrrrrrrrrww             wwrr",
      "r           rrr                                               wwrr",
      "rrrrrrrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrww             wwrr",
      "rrrrrrrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrww             wwrr",
      "rrr              rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwrr",
      "rrr  rrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwrrrrrr",
      "rrr  rrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr  rrrrrrrrrr        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr  rrrrrrrrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr  rrrrrrrrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr  rrrrrrrrrrrrrrrr      rrrrrrrrrrr      rrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr  rrrrrrrrrrrrrrrrrrrr                               rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr     G G G G G  rrrrrr  rrrrrrrrrr        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                      r",
      "rrr                rrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                      r",
      "rrr     G G G G G  rrrrrr                                          pppppppppppppppppppppppppppppppp2",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                      r",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr         rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                      r",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",]
  },

      // world 1 level 4
      {
        showTitleScreen:true,
        bgImage:"cave", //either "grass", "sand", "cave"
        map:["|||||||||||||||||||||||||",
"|||||||||||||||||||||||||",
"|||||||||||||||||||||||||",
"|||||||||||||||||||||||||",
"|||||||||||||||||||||||||",
"|||||===============|||||",
"|||||=      =      =|||||",
"|||||= == ===== == =|||||",
"|||||= =    =    = =|||||",
"|||||= = == = == = =|||||",
"|||||= = =  =  = = =|||||",
"|||||= = = === = = =|||||",
"|||||= = =     = = =|||||",
"|||||= = = = = = = =|||||",
"|||||=     =♀=     =|||||",
"|||||=======0=======|||||",
"|||||||||||||||||||||||||",
"|||||||||||||||||||||||||",
"|||||||||||||||||||||||||",
"|||||||||||||||||||||||||",
"|||||||||||||||||||||||||"]
 },


      // world 1 level 5 by https://github.com/puentejose
    {
  showTitleScreen:true,
  bgImage:"grass", //either "grass", "sand", "cave"
  map:
      ["TtTttTtTtTTtttTTtTTttttttTTttTTTTTTTTTTTTTTTT                  ",
      "t                 T            tT      TTTTTTTTTTTt            ",
      "T ♀    t  t            T       T      +         ++t            ",
      "T                                                +t            ",
      "tt   t T    tTtTt   Ttt0  tt     T        t       t            ",
      "Ttt       t TTttt  ttTTt TTttt       T        T   t            ",
      "Tt  T  t   TTTttttttTttT TTTTtt                   t            ",
      "T         TTtT Tttt  TTt ttTTTt   t               t            ",
      "T          tt  TtT   tT   tT T            g       ttTtTTtTttTTT",
      "t    T                         + + +   t      g              +T",
      "T       t                T     G G G      w w   w  h ww   w   T",
      "T              t   t              g       w   w      ww w     T",
      "t  t        T                  G G G             gw        g  T",
      "T       w                              T      g  www          T",
      "T      wwwwgw h  T    T     T  GgG G        T                 T",
      "T      gwwww        t                                 g  T    T",
      "T  T   wwwwwg           t                     t               T",
      "T        www   T                        t        tt           T",
      "T        wggw                          TTT      tTtT    T     T",
      "T                  t   t  + t     T    TtT      tTtT          T",
      "T    t            Tt + tt   T          TtT   T  tTtT          T",
      "tTT     T          t   tt 1 TT        ttTTT     TtTtT         T",
      "TTtT        t   T   TtTtTTttT          tTT               T    T",
      "TT                                            +             ++T",
      "TT +       t  t          t        T                   +     +TT",
      "TT    TTTTT      t                   +           +  +++     +TT",
      "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT"]
    
},

      // world 1 level 6
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 1 level 7
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 1 level 8
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 1 level 9

  {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
}
], // end world 1
  [
    // begin world 2
    // world 2 level 0 sand background tile, by https://github com/ejilee
    {
      showTitleScreen:true,
      bgImage:"sand", //either "grass", "sand", "cave"
      map:[
    "=====================================^^^^^^^========^^^=======gg   ",
    "=    gtT T gT tT ttTttT r Tgrrrrr ttT^^^^^^^Tgtggggt^^^gTkTrTrtt   ",
    "=   grT gtTg TTttTT rTttTgtgrwwwrg tg=||==|=gggggggg=4=ggrt+tTtrtg ",
    "=g  tTTT T rtgttT tTrtgTt g rwwwr kgg=======ggg^gg      gttrt+T g  ",
    "= p  tgrTgrTgtrTtT t Trg t  krpr  g g    tgggg^^^rrrrrrrrrtgTTTT t ",
    "= p g  t gt kt  t  t gt   k   p k  k    g  ggg===rT    ++rgtTr Tg t",
    "= p                           p          g g g=|=r  G G  rgTtT+rtt ",
    "=gppppppppppppppppppppppppppppppppppp     ^^^^===r   k   rTrTT T T ",
    "= g  g    g p                 p k   pp   g=====|=r G G G rtTT+t+T  ",
    "=gg g  ggg  p   ^^^^^^      k p   k  ppg +===1===r       rgtTTtTTgt",
    "=Tgg g g   gp  ^^^^^^^^   k   p       ppgr   p   rrr   rrrTTrT+T+  ",
    "=gggg g g g p  =||=|=|=     k p        pppppppppkg t p t trtTTTtTT ",
    "=^^gggkgg   p  ========       p              p       p    Tt+T T   ",
    "^^^^gggggg gp              gg p gg          kp       p     TTtT+T+g",
    "====ggg g g p             trr p rrt          ppppppppp  g rTr gTTg+",
    "==|=gg^ggg  p        p   Twww p wwwT     r   p           gttTTtTt +",
    "====g^^^g g pppppppppp  twww     wwwt   k    p        g rggTT T+ + ",
    "==|=^^^^^g  p          gwwwg r r gwww        p      ^^^^^+t tT+T+ +",
    "====^^^^^^g p           www   k   www        pg g  ^^^^^^^+TTg tT  ",
    "==|=|===|=  p         ggwwwg k k gwwwg   g   p     =|=|=|=rTT+tTTt ",
    "======2===  p   g T gggt+www w w www+tgg gT gppg g =======tgTgTT T ",
    "      p   g p    gggtgT+++wwwwwwwww+++Tgtggg  pp  g       tTgTtT+rt",
    "      p   g p  g gtrTr+++++rrcccrr+++++trrtgg gppgg       TgTtT+gT ",
    "rr    p     p       rrcccccccc6ccccccccTTTgg    ppppppppgtT+tTT t+T",
    "r T k ppppppp      r  rccccccc  cccccccrTg          g gggtTgTT T   ",
    "r           p        r  rcccccc  cccccTtgg   ^^       gktTgTtT+  gr",
    "rrrr      r p             cccccc    cctgg   ^^^^     g gggTtT+TTr T",
    "rwwwrr      p      k       ccc3cccc  cg  g ^^^^^^      g rgtTT+t+r ",
    "rwwwwwr     pp     p    k   ggggcccc c g  ^^^^^^^^    g ggggtTTtTtt",
    "rwwwwwwr     pp    p    p    T Ggcc  cg  ^^^^^^^^^^    gg gTTrTtT+ ",
    "rwwwwwwr      pp   p    p     k  cc cc  ^^^^^||^^^^^ g g g rtTTTtTT",
    "rww gwwwr  g   pppppppppppppp    c  cc  ^^^^||||^^^^ gggg gTt+T Tr ",
    "rw k  wwr gt     p    p    g  g gc ccg g^^^^5555^^^^g g ggtgTTtT+T+",
    "rw Tgg wwrgg g g p g  p  g   g t c ccgg g  +g  g+      g gTtT+rt++ ",
    "rww   wwwr Tgtgg kg g p   gggTggcc cckg  g    k    g ggrtTTgTt+TrTr",
    "rrwwwwwwwrtgtgg g g   pg tgTtrrccc     g  g      g  g gTt+T tTTtT+T",
    "rrrrrrrrrrrrrrrrrrrrrrprrrrrrrcccccrg gggg  grrg gg gg ggttT+Tt+t++",
    "cccccccccccccccccccccc♀cccccccccccrrrrrgrggrrr rgg grtgTTr rTT+ttrT",
    "cccccccccccccccccccccc0cccccccccccccrrrrrrrrccccrtrtgT+t+tTt+r+Tr+T"]
  },
      // world 2 level 1, by https://github.com/Grigory57
      {
        showTitleScreen:true,
        bgImage:"sand", //either "grass", "sand", "cave"
        map:[
      "rrrrrrrccrrrrrrrTTTTTTTTtTTTTTTrrrrrrrrrrrrrrrrrrr============T",
      "T                                      rrrrrrrrrr           k  r",
      "T   rrrrrrrrrcccrrrrrrrrrrrrrrrrrrrr               rrrrrrrrrrrrr",
      "T                                           k^^^                T",
      "G   rrrrrrrrrrrrrrrrrrrrrrrrr1rrrrrrrrrrrrrrr^^^rrrrrrrrrrrrr  r",
      "=                                   ggggggg  ===   gggggggg  k  T",
      "=====rrrrrrrrr=============================  =5=  ==============",
      "0                                                               T",
      "t   ==========   ccccccccccccccccccccccccccggggggggggT         T",
      "T   k t gg       g t   k   t     k     T        k    ggTTT      T",
      "T     t            t      t          t                         T",
      "T                                          k ^^^                T",
      "G   rrrrrrrrrrrrrrrrrrrrrrrrr1rrrrrrrrrrrrr  ^^^rrrrrrrrrrrrrrrr",
      "=                                   ggggggg  ===   gggggggg  k  T",
      "=====rrrrrrrrr=  =============================7=  ==========  ==",
      "0♀                                                              T",
      "t   ==========ccccccccccccccccccccccccccggggggggggT            T",
      "T                                                               T",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"]
    },

      // world 2 level 2, sand background tile
      {
        showTitleScreen:true,
        bgImage:"sand", //either "grass", "sand", "cave"
        map:[
      " =4============+=====================r=============",
      "=                        r+           r            =",
      " ======== r===========r =========== r=   ==========",
      "=                                                 +=",
      " == ======r===== ===========+======= ==r  ==== ====",
      "=        r  +    r r    +             r   r    r",
      "=          r     r  +    r   r r rrr r  +   r   r",
      "=         r     r r    r               r   r     r",
      "==+  +== r  +  r     r    r r r r r r  +   r  +   r",
      "=+  +==   r  + r   r             r   r  r   r  r   r",
      "==+  +==   r r  +   r rr   r r r  +   r  +   r  r   r",
      "==+  +==  r   r  +   r   r  r r r  +  r   r   r  =   r",
      "==+  +==   r =  r   r rr   r r r r    r  +   r  ===   r",
      "==+  +==  r ===  r   r   r  + r   r   r   r  + =====   r",
      "=+  +==    =====  r  +   r r       r   r   r  ===1===   r",
      "==+  +==  ===3===  r r  + r   r     r   r  r +           r",
      "=+  +==    r  r + r  +   r   r r r   r   r  +    r  +   r",
      "==+  +==r r  r +   r  r r   r   r r   r   r  r    r  + r",
      "=+  +====  r r  r  +   r   r   r   r   r   r  +    r    r",
      "+    +====r   r r   r r   r   r  =  r   r   r  +    r  +",
      "= =========r r   rr  +   r   r  ===  r   r   r  r  r   r",
      "+   +=====r   r    r  +     r  =====  r   r    r  r   r",
      "==+  +===  r r r  +    r   r  =======  r  +   r  +   r",
      "=+  +===  r  +  r  +   r  +  =========   r r r  +     r",
      "==+  +==   r  r  r  +  r r  =====5=====rr  +  r    r   r",
      "=+  +===  r  +  r  +  rr  +  r      + r      r    r   r",
      "==+  +== r    r  +r  +  r  +  r      +    r r    r   r",
      "=+  +===  r  +  r  +  r  +  r       rr r r   r  +   r",
      "==+  +== r    r  +  r r  r   rr r  +  r   r r    r   r",
      "=+  +===  r  +  r  +   r  +r   r rr  + r r   r   +    r",
      "==+  +== r    r  +r   r   r rr  +    r   r  +     r  =",
      "=+  +===  r  +  r  =   r   r  +  r r  +      r   +  ===",
      "==+  +== r  +  r  ===   r   r  +  r  +   rr r   +  =====",
      "=+  +==   r   r  =====   r   r  r   r   r  +   r  =======",
      "==+  +== r   r  =======   r   r  +   r   r  +   r      r",
      "=+  +==   r r   r    r + r  + r     r   r  +     r      r",
      "==+  +== r   r   r    +    r     rrr   r  +     r      r",
      "==        r   r   r    rrrr rrrrr    rr  +     r      r",
      "===          r     r       r        r   r     +      r",
      "==== ========= ========= === ======r  +=  ========== ==",
      "===                                  r             =  ==",
      " == ============== ===============r=  r======  =====+ =",
      "  =                                                   +",
      "   ========================== =======r===r============",
      "      =======================♀=====================",
      "        ===================== ===================",
      "          ===================0=================",
      "            =================0===============",
      "              ===============0============="]
    },

      // world 2 level 3, cave background tile
      {
        showTitleScreen:true,
        bgImage:"sand", //either "grass", "sand", "cave"
        map:[
      "=======================================================================",
      "=     =   =     =   =   =             =     =     =     =         =   =",
      "= === = = = === = === = = = ========= = === = === = = = = ======= = = =",
      "= =   = = = =   =     =   = =       = =   =   = =   = =   =       = = =",
      "= = === = === ============= = ===== = === == == ===== ===== ===========",
      "= =   = =   = =     =         =     = =   =   =       =   =     =     =",
      "= === = === = ===== = =============== === = = ========= = ===== === ===",
      "=   = =   =       =   =     = =    k  =   = =     =     =   =   =     =",
      "=== = === === === ========= = = ======= === === = = ======= = === = ===",
      "= = = = =   = =   =   =         =       =   = = = =  0  =   =     =   =",
      "= = = = ===== = === = = ========= ========= = = = ===== = ===== ===== =",
      "=   =   =   = = =   = = =         =       = =   = =     =     = =   = =",
      "=      == = = = = === = = = ======= ===== === === = === = ===== = = = =",
      "=  = =  = =   =   =   = = = =     = =   =   = = = = = = =       = =   =",
      "======= = ========= === = === = = = === === = = = = = = = ======= =====",
      "=     = = =   k   = =         = =   =     = = = = =   =   =   =6= =   =",
      "= === = = = === = = = = ======= ===== ===== = = = === ===== = = = = = =",
      "=   =   = = =   = = = =       =   = = = 1 = =   = =   =     = =   = = =",
      "=== ===== = = === = = ===== = === = = = = = ===== = = = ===== ======= =",
      "=   =     = = =   =   =     = =   =     = = =       = =     =   =   = =",
      "= = = = === = === ===== ===== = === ======= = ================= = = = =",
      "= =   =     =   =   =   =     =   = =       =    5=       =   = = = = =",
      "= ============= === = =========== = ======= = ===== ===== = = = = =====",
      "=     =       =   = =    2  = =   =   = =         =   =   = = = =     =",
      "===== = ===== = = ======= = = = ===== = = = === = === = === = = === = =",
      "=     = =     = =         =   =     =     =     =     =     = =   = = =",
      "= ======= ===== ============= ===== === ========= =========== === = = =",
      "= =     =   =   =   =       = =   = =   =     =   =     =     =   = = =",
      "= = === === ===== = = ======= = = = === === = ===== === = ===== ===== =",
      "= =   =   =     = = =         = = =     =   =     =   = = =   = =   = =",
      "= = ===== ===== = = ============= ======= ======= ===== = = = = === = =",
      "= =   =       = = = =     =       =4=   = =     =     =   = =   =   = =",
      "= === ========= === = === = === = = = = = = === = === = === ===== === =",
      "=   = =   =     =     =   = =   = =   =   = =   =   = =   = =   =   = =",
      "=== = = = = ===== = =====   ===== = ======= = = === = === = = = === = =",
      "=   =   =   =     = = =   =   =   =       = = = = = =   =     =     = =",
      "= ===== = === ===== = = ===== = ======= = = = = = = === = = ===== === =",
      "= =     = =   =       =     = =         = = = =   = =   = = =     =   =",
      "= = === = = = = = === ===== = =========== = = ===== ===== = ======= = =",
      "= =   = = = =     =   =     =           =   = =   =       =   =   = = =",
      "= === = = = = === = = = ======= ======= = === === =========== === = = =",
      "=     = = =     = = =         = =       =   =   =   =       =   =   = =",
      "======= = = ===== = =========== = ======= ===== === === ======= =======",
      "=         =   =   =     =     = = =     = =     = =   =   =   =   =   =",
      "=   = ===== === = ======= = = = = = === === = === === === = = === = = =",
      "= ♀ =         = = =   =   = = = =   =   =   =     =   = = = =   =   = =",
      "==0===================================================================="]
    },

      // world 2 level 4
      {
        showTitleScreen:true,
        bgImage:"cave", //either "grass", "sand", "cave"
        map:["|||||||||||||||||||||",
"|||||||||||||||||||||",
"|||||||||||||||||||||",
"|||||||||||||||||||||",
"||||||=========||||||",
"|||||=         =|||||",
"||||=  =======  =||||",
"||||= =       = =||||",
"||||= ==== ==== =||||",
"||||= =       = =||||",
"||||= ===   === =||||",
"||||=           =||||",
"|||||== == == ===||||",
"||||||=  = =  =||||||",
"|||||||===♀===|||||||",
"||||||||||0||||||||||",
"|||||||||||||||||||||",
"|||||||||||||||||||||",
"|||||||||||||||||||||",
"|||||||||||||||||||||"]
      },

      // world 2 level 5
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 2 level 6
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 2 level 7
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 2 level 8
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 2 level 9
      {
    showTitleScreen:true,
    bgImage:"sand", //either "grass", "sand", "cave"
    map:[]
  }
  ], // end world 2
  [
    // begin world 3
      // world 3 level 1
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 3 level 2
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 3 level 3
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 3 level 4
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 3 level 5
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 3 level 6
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 3 level 7
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 3 level 8
    {
  showTitleScreen:true,
  bgImage:"sand", //either "grass", "sand", "cave"
  map:[]
},

      // world 3 level 9
      {
    showTitleScreen:true,
    bgImage:"sand", //either "grass", "sand", "cave"
    map:[]
  }
  ] // end world 3
];
