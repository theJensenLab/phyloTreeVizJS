/* eslint-env browser */
'use strict'

require('./style.css')
require('../node_modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('./controlBar.js')
require('./popforms.js')
require('./tnt_tooltip.js')

require('./backdrop.js')

let treeBox = document.createElement('div')
treeBox.id = 'treeBox'
document.body.appendChild(treeBox)

// TEMPORARY SO THAT TREE IS AUTOMATICALLY LOADED
// let newick = '(1491|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|St_mal_1491|BurJV3_1158|YP_004791716.1||36H:0.202183,1491|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|St_mal_1491|BurJV3_1903|YP_004792454.1||36H:0.2167114,1491|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|St_mal_1491|BurJV3_3580|YP_004794119.1||36H:0.7567341,1491|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|St_mal_1491|BurJV3_1908|YP_004792459.1||36H:0.2728412,1491|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|St_mal_1491|BurJV3_1904|YP_004792455.1||36H:0.2982877,1491|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|St_mal_1491|BurJV3_3037|YP_004793581.1||36H:1.2930539999999997,1301|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|Ps_suw_1301|Psesu_0059|YP_004145153.1||36H:0.32161300000000004,((1301|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|Ps_suw_1301|Psesu_1466|YP_004146544.1||36H:1.14887E-6,(1301|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|Ps_suw_1301|Psesu_1465|YP_004146543.1||36H:0.0943731,1301|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|Ps_suw_1301|Psesu_1463|YP_004146541.1||36H:0.194203)57.0:0.0337254)99.0:0.219884,((((1521|Gammaproteobacteria/Chromatiales/Chromatiaceae|Th_vio_1521|Thivi_1211|YP_006413359.1||36H:0.236952,90|Gammaproteobacteria/Chromatiales/Chromatiaceae|Al_vin_90|Alvin_2230|YP_003444181.1||36H:0.545494)96.0:0.272188,(90|Gammaproteobacteria/Chromatiales/Chromatiaceae|Al_vin_90|Alvin_0183|YP_003442182.1||36H:0.222967,1521|Gammaproteobacteria/Chromatiales/Chromatiaceae|Th_vio_1521|Thivi_0439|YP_006412631.1||36H:0.193516)94.0:0.154448)75.0:0.11165,(90|Gammaproteobacteria/Chromatiales/Chromatiaceae|Al_vin_90|Alvin_1872|YP_003443828.1||36H:1.03373,90|Gammaproteobacteria/Chromatiales/Chromatiaceae|Al_vin_90|Alvin_2222|YP_003444173.1||36H:0.428633)68.0:0.0845774)98.0:0.6261815000000001,(((746|Gammaproteobacteria/Oceanospirillales/Hahellaceae|Ha_che_746|HCH_00457|YP_431792.1||36H:0.188536,746|Gammaproteobacteria/Oceanospirillales/Hahellaceae|Ha_che_746|HCH_00458|YP_431793.1||36H:0.255473)100.0:0.998459,(1418|Gammaproteobacteria/Methylococcales/Methylococcaceae|Me_met_1418|Metme_2154|YP_004513058.1||36H:0.414826,1536|Gammaproteobacteria/Methylococcales/Methylococcaceae|Me_alc_1536|MEALZ_2872|YP_004918123.1||36H:0.254227)100.0:0.630953)82.0:0.313748,741|Gammaproteobacteria/Chromatiales/Ectothiorhodospiraceae|Ha_hal_741|Hhal_2163|YP_001003729.1||36H:1.2288002,((1515|Gammaproteobacteria/Alteromonadales/Alteromonadaceae|Gl_nit_1515|GNIT_1657|YP_004871766.1||36H:0.512384,2165|Gammaproteobacteria/Simiduia/----Not Available----|Si_aga_2165|M5M_00415|YP_006915050.1||36H:0.912576)99.0:0.606625,((1433|Gammaproteobacteria/Vibrionales/Vibrionaceae|Vi_ang_1433|VAA_01905|YP_004577835.1||36H:1.14887E-6,7812|Gammaproteobacteria/Vibrionales/Vibrionaceae|Li_ang_7812|N175_16910|YP_008489689.1||36H:1.14887E-6)100.0:0.089698,((319|Gammaproteobacteria/Vibrionales/Vibrionaceae|Vi_cho_319|VCA1092|NP_233472.1||36H:1.14887E-6,1795|Gammaproteobacteria/Vibrionales/Vibrionaceae|Vi_cho_1795|VC395_A1113|YP_002822179.1||36H:1.14887E-6)100.0:0.180541,1564|Gammaproteobacteria/Vibrionales/Vibrionaceae|Vi_fur_1564|vfu_B00980|YP_005049501.1||36H:0.1635335,7850|Gammaproteobacteria/Vibrionales/Vibrionaceae|Vi_nig_7850|VIBNI_B0011|YP_008640924.1||36H:0.2666615)59.0:0.100923)99.0:0.627622)75.0:0.4120882,598|Gammaproteobacteria/Thiotrichales/Piscirickettsiaceae|Th_cru_598|Tcr_0553|YP_390823.1||36H:3.2822688,((1387|Gammaproteobacteria/Aeromonadales/Aeromonadaceae|Ae_ver_1387|B565_3180|YP_004393832.1||34H:0.0265009,(811|Gammaproteobacteria/Aeromonadales/Aeromonadaceae|Ae_hyd_811|AHA_1033|YP_855575.1||34H:0.00121353,818|Gammaproteobacteria/Aeromonadales/Aeromonadaceae|Ae_sal_818|ASA_3269|YP_001143005.1||34H:0.0454263)94.0:0.0915285)100.0:2.10805,598|Gammaproteobacteria/Thiotrichales/Piscirickettsiaceae|Th_cru_598|Tcr_2004|YP_392268.1||36H:2.25087)65.0:0.7601528000000001,1125|Gammaproteobacteria/Alteromonadales/Alteromonadales genera incertae sedis|Te_tur_1125|TERTU_1341|YP_003072897.1||36H:1.0540208000000002,1125|Gammaproteobacteria/Alteromonadales/Alteromonadales genera incertae sedis|Te_tur_1125|TERTU_2935|YP_003074319.1||36H:1.6780256999999998,468|Gammaproteobacteria/Alteromonadales/Alteromonadaceae|Sa_deg_468|Sde_3105|YP_528574.1||36H:0.9334726999999999,(1241|Gammaproteobacteria/Alteromonadales/Pseudoalteromonadaceae|Ps_sp._1241|PSM_A2954|YP_004070018.1||36H:0.450249,(634|Gammaproteobacteria/Alteromonadales/Shewanellaceae|Sh_ama_634|Sama_3497|YP_929369.1||36H:0.0795652,(130|Gammaproteobacteria/Alteromonadales/Shewanellaceae|Sh_vio_130|SVI_0176|YP_003554925.1||36H:0.0544363,680|Gammaproteobacteria/Alteromonadales/Shewanellaceae|Sh_loi_680|Shew_0111|YP_001092242.1||36H:0.1500089,(917|Gammaproteobacteria/Alteromonadales/Shewanellaceae|Sh_sed_917|Ssed_0184|YP_001471925.1||36H:0.0299648,862|Gammaproteobacteria/Alteromonadales/Shewanellaceae|Sh_woo_862|Swoo_0164|YP_001758560.1||36H:0.0318285)85.0:0.0666712)88.0:0.182842)100.0:0.407574)89.0:0.6990598,2361|Gammaproteobacteria/Oceanospirillales/Thalassolituus|Th_ole_2361|TOL_2508|YP_007683144.1||36H:0.9475128)89.0:0.47424010000000005,((1521|Gammaproteobacteria/Chromatiales/Chromatiaceae|Th_vio_1521|Thivi_1222|YP_006413370.1||36H:0.73392,219|Betaproteobacteria/Gallionellales/Gallionellaceae|Ga_cap_219|Galf_0075|YP_003845884.1||36H:0.365511)67.0:0.149344,(219|Betaproteobacteria/Gallionellales/Gallionellaceae|Ga_cap_219|Galf_1023|YP_003846817.1||36H:0.2349,219|Betaproteobacteria/Gallionellales/Gallionellaceae|Ga_cap_219|Galf_1314|YP_003847104.1||36H:0.3656622,219|Betaproteobacteria/Gallionellales/Gallionellaceae|Ga_cap_219|Galf_2731|YP_003848490.1||36H:0.6526282)67.0:0.113099)64.0:0.35559609999999997,((7713|Gammaproteobacteria/Pseudomonadales/Pseudomonadaceae|Ps_res_7713|PCA10_13880|YP_008101725.1||36H:0.16510429999999998,2356|Gammaproteobacteria/Pseudomonadales/Pseudomonadaceae|Ps_den_2356|H681_00805|YP_007655583.1||36H:0.0668083,(7891|Gammaproteobacteria/Pseudomonadales/Pseudomonadaceae|Ps_aer_7891|PA1S_gp3690|REF_DMTMMU|PA1S_gp3690||36H:1.14887E-6,479|Gammaproteobacteria/Pseudomonadales/Pseudomonadaceae|Ps_aer_479|PA0176|NP_248866.1||36H:1.14887E-6)100.0:0.0941336)99.0:0.246875,(((1395|Gammaproteobacteria/Alteromonadales/Alteromonadaceae|Gl_sp._1395|Glaag_2576|YP_004434785.1||36H:0.391354,(7736|Gammaproteobacteria/Alteromonadales/Alteromonadaceae|Al_mac_7736|I876_02010|YP_008194826.1||36H:0.202474,(7736|Gammaproteobacteria/Alteromonadales/Alteromonadaceae|Al_mac_7736|I876_02015|YP_008194827.1||36H:0.215759,(1413|Gammaproteobacteria/Alteromonadales/Alteromonadaceae|Al_sp._1413|ambt_16735|YP_004468654.1||36H:0.0832493,7736|Gammaproteobacteria/Alteromonadales/Alteromonadaceae|Al_mac_7736|I876_01970|YP_008194818.1||36H:0.0776744)98.0:0.309935)76.0:0.153345)90.0:0.271194)54.0:0.114493,((1795|Gammaproteobacteria/Vibrionales/Vibrionaceae|Vi_cho_1795|VC395_0082|YP_002818346.1||36H:1.14887E-6,319|Gammaproteobacteria/Vibrionales/Vibrionaceae|Vi_cho_319|VC0098|NP_229757.1||36H:1.14887E-6)100.0:0.552966,859|Gammaproteobacteria/Oceanospirillales/Marinomonas|Ma_sp._859|Mmwyl1_3301|YP_001342141.1||36H:0.828678)69.0:0.172341)75.0:0.203045,(1360|Gammaproteobacteria/Oceanospirillales/Marinomonas|Ma_med_1360|Marme_1102|YP_004312213.1||36H:0.648921,(679|Gammaproteobacteria/Alteromonadales/Shewanellaceae|Sh_sp._679|Shewana3_2216|YP_869851.1||36H:0.0224897,(241|Gammaproteobacteria/Alteromonadales/Shewanellaceae|Sh_bal_241|Sbal175_2162|YP_006020732.1||36H:0.0841104,481|Gammaproteobacteria/Alteromonadales/Shewanellaceae|Sh_one_481|SO_2123|NP_717726.1||36H:0.0475542)75.0:0.0157811)100.0:0.25461)57.0:0.101369)85.0:0.301325)79.0:0.47307600000000005,7922|Betaproteobacteria/Burkholderiales/Alcaligenaceae|Ac_xyl_7922|AX27061_4693|REF_ETEC|AX27061_4693||36H:2.7452889999999996,1491|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|St_mal_1491|BurJV3_2459|YP_004793006.1||36H:1.376829)81.0:0.322796)57.0:0.10497110000000001,1491|Gammaproteobacteria/Xanthomonadales/Xanthomonadaceae|St_mal_1491|BurJV3_3943|YP_004794481.1||36H:0.572304);'
// let newick = '(Bovine:0.69395,(Gibbon:0.36079,(Orang:0.33636,(Gorilla:0.17147,(Chimp:0.19268, Human:0.11927):0.08386):0.06124):0.15057):0.54939,Mouse:1.21460);'
let newick = '(XX10XX:0.48063821898239145192,((XX23XX:0.14747939753829347742,(XX22XX:0.23134312120287783832,XX21XX:0.12526096496841729322)87:0.13643836215402468937)100:0.65394857136725881297,((XX6XX:0.54566846989889017383,((((XX14XX:0.00000100000050002909,XX15XX:0.00000100000050002909)100:0.19195951011671638642,XX16XX:0.31569630290702627162)44:0.08230502945072595833,XX17XX:0.35967063583317077091)100:1.13680632743422860287,((XX12XX:0.36053090289344319475,XX13XX:0.58055276897773555600)100:0.61839627444545630652,(((((XX4XX:0.42303312551546140563,XX19XX:0.37802285919135836245)100:0.84602181636200013415,(XX18XX:0.15271398644273292966,(XX34XX:0.06632812107858232498,((XX38XX:0.01142075015929051689,((XX35XX:0.00000100000050002909,XX36XX:0.00000100000050002909)74:0.00000100000050002909,XX37XX:0.00507024487013408957)83:0.00000100000050002909)99:0.09093984902575460993,XX24XX:0.08628422854874684411)37:0.02313237323189010208)33:0.03539236437994420365)100:1.07281939382840296737)42:0.13096131645309347369,(XX3XX:0.20866234551099258065,XX27XX:0.36400488317637352820)100:1.13170336593293829885)29:0.14687255546893787650,(XX26XX:0.95040490638851771177,(((XX7XX:1.10448786132879139821,(XX20XX:0.80418658460282577138,XX25XX:0.63615773214020365778)100:0.66801276836082612576)98:0.35372119162832482697,((XX31XX:0.37379913097027844815,((XX29XX:0.00000100000050002909,XX30XX:0.00000100000050002909)100:0.40332421955844272032,(XX28XX:0.00000100000050002909,XX9XX:0.00000100000050002909)100:0.28088235382130682938)90:0.12957842716475706513)88:0.10461036550734717498,(XX33XX:0.46420527372224534846,XX32XX:0.42345355493681796633)59:0.03697089510917715705)100:1.24264377258143543514)30:0.22237357915665628694,XX8XX:0.83143299868296438593)12:0.08196868050512604031)6:0.05129951694376776866)14:0.06385138613490017045,XX5XX:1.44632632399872473883)49:0.20613150848790601222)79:0.45328857470527500473)100:1.07129988039579426840)27:0.05399082615448068390,(XX1XX:0.42130930452568426947,(XX0XX:0.28903664713102333872,XX2XX:0.26393626080961041236)100:0.23412068872417518550)100:0.80024566441574052078)45:0.11495947084810115291)100:0.47049679083534790003,XX11XX:0.36502544911272322148);'
// let newick = '((C:0.5,D:0.5)1:1,(A:2,(B:0.3,X:0.4)3:3)2:4,E:0.8)R;'
let phylogician = require('./phylogician.js')
phylogician.makeTree(newick)
