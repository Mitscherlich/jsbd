import { JSBD } from '../../src/jsbd'

let t = (a: any, b: any, expected: any, roundOption?: any) => {
  test(a.toString() + ' / ' + b.toString(), () => {
    let a1 = JSBD.BigDecimal(a)
    let b1 = JSBD.BigDecimal(b)
    let res = JSBD.divide(a1, b1, roundOption)
    let expectedV = JSBD.BigDecimal(expected)
    expect(res.toString()).toBe(expectedV.toString())
  })
}

t('1.005000000001', '1.0000000001', '1', { maximumFractionDigits: 2, roundingMode: 'half even' })
t('1.005000000001', '1.0000000000000001', '1.01', { maximumFractionDigits: 2, roundingMode: 'half even' })
t('5.5', '1', '6', { maximumFractionDigits: 0, roundingMode: 'half even' })
t('2.5', '1', '2', { maximumFractionDigits: 0, roundingMode: 'half even' })
t('1.6', '1', '2', { maximumFractionDigits: 0, roundingMode: 'half even' })
t('1.1', '1', '1', { maximumFractionDigits: 0, roundingMode: 'half even' })
t('1.0', '1', '1', { maximumFractionDigits: 0, roundingMode: 'half even' })
t('-1.0', '1', '-1', { maximumFractionDigits: 0, roundingMode: 'half even' })
t('-1.1', '1', '-1', { maximumFractionDigits: 0, roundingMode: 'half even' })
t('-1.6', '1', '-2', { maximumFractionDigits: 0, roundingMode: 'half even' })
t('-2.5', '1', '-2', { maximumFractionDigits: 0, roundingMode: 'half even' })
t('-5.5', '1', '-6', { maximumFractionDigits: 0, roundingMode: 'half even' })

// { maximumFractionDigits: 2, roundingMode: 'half even' }
{
  t('-79158462', '-614043868', '0.13', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-77798', '-7931', '9.81', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-69.36165836135432982700876891613006591796875', '-5871154.717310545034706592559814453125', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-0.05177743414331958948793044328340329229831695556640625', '6095.09358407237959909252822399139404296875', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('22545991', '13', '1734307', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('729048', '7058', '103.29', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-3437442.8524118550121784210205078125', '-8.315632954593443315616241306997835636138916015625', '413371.16', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-482.8929854317647141215275041759014129638671875', '42.7635768305310222103798878379166126251220703125', '-11.29', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-1202.074860447645050953724421560764312744140625', '247847', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-24422387', '8', '-3052798.38', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0', '1.8825911967506525623861080021015368402004241943359375', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-96691', '-382.5905056717903107710299082100391387939453125', '252.73', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-195211.41900341477594338357448577880859375', '208571', '-0.94', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0', '-28', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-633175159.86811888217926025390625', '-957586.05692669679410755634307861328125', '661.22', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0', '581.9659923300188211214845068752765655517578125', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('38', '51.1223084605614275233165244571864604949951171875', '0.74', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-67.561319060508054690217250026762485504150390625', '-4427827.08730092085897922515869140625', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('4010306', '-10002899', '-0.4', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-9.770694692158667038484054501168429851531982421875', '-1.3542169330066633481379767545149661600589752197265625', '7.22', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-524620', '56091825.230894811451435089111328125', '-0.01', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0', '-500615', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('814', '19334960.9646024666726589202880859375', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('1565.8139740966071258299052715301513671875', '-7421.7978422297755969339050352573394775390625', '-0.21', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0', '-772', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('9544.856152011439917259849607944488525390625', '-874384.79174868226982653141021728515625', '-0.01', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0', '-6110', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-80', '2824', '-0.03', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('183813', '-3', '-61271', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('5976888.348173142410814762115478515625', '-1007.60706058793721240363083779811859130859375', '-5931.77', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('33425', '46106389.740510068833827972412109375', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('607406.716277834610082209110260009765625', '0.48875597644759138926673358582775108516216278076171875', '1242760.69', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('868083.1771273850463330745697021484375', '-488', '-1778.86', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('6299.6467501168835951830260455608367919921875', '468275658.928926408290863037109375', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('487387', '-986.2826835526738022963399998843669891357421875', '-494.17', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-94831278.61030070483684539794921875', '-58547.8350790832846541889011859893798828125', '1619.72', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-7.06343679703956173199230761383660137653350830078125', '-778282.97075066785328090190887451171875', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-87278', '-532540502.594942569732666015625', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('67052795.1762718856334686279296875', '-964.9780561402632201861706562340259552001953125', '-69486.34', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('1', '8550.736930086151915020309388637542724609375', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0', '-700', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-27.44674165181404390523312031291425228118896484375', '-24099', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-175319', '61325.949297242579632438719272613525390625', '-2.86', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-8', '-0.1476233017742745179390340126701630651950836181640625', '54.19', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-433326', '-745625489', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0.35711266950624376281808736166567541658878326416015625', '-801444294.8187057971954345703125', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-175160.4828092441312037408351898193359375', '0.3751553782013858917565585215925239026546478271484375', '-466901.16', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-6325.946742164467650582082569599151611328125', '4097469', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-633.7904091504698271819506771862506866455078125', '19', '-33.36', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('19152756', '-562764228', '-0.03', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('5058609', '-438.16266319284926566979265771806240081787109375', '-11545.05', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-7125875', '-40867976.27881465852260589599609375', '0.17', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-3.552843124370514971133161452598869800567626953125', '97', '-0.04', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-336', '-0.89215161193041836451556036990950815379619598388671875', '376.62', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0.23781500483284501168412816696218214929103851318359375', '-0.05120414142811480218142605735920369625091552734375', '-4.64', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('23.355988764905443844099863781593739986419677734375', '808.1277897718367739798850379884243011474609375', '0.03', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('31', '-27590559.947870217263698577880859375', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('6301324', '783.1737430573701885805348865687847137451171875', '8045.88', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-546060635', '-4', '136515158.75', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-773947315.0747878551483154296875', '-99734379.55028259754180908203125', '7.76', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-5.153368391222169719867451931349933147430419921875', '9491976', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('82108', '912956.37123369355686008930206298828125', '0.09', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-5286', '7186.5672549338996759615838527679443359375', '-0.74', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-0.2719793177580687171257523004896938800811767578125', '5507858.0815034694969654083251953125', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('6451171.903058248572051525115966796875', '4893.0717934587473791907541453838348388671875', '1318.43', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('33741181', '-5658.3111461383805362856946885585784912109375', '-5963.12', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0.559713713856926364798027861979790031909942626953125', '-72', '-0.01', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-9.38249440136501533515911432914435863494873046875', '-92518', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-6.7513410580985695474964813911356031894683837890625', '4.211253171708950304719110135920345783233642578125', '-1.6', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-17718953', '93815655.26800476014614105224609375', '-0.19', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-3840', '99.859836936020172970529529266059398651123046875', '-38.45', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('95980398.1703145802021026611328125', '13534762.54489162005484104156494140625', '7.09', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('3652789.686837418936192989349365234375', '783985016.39960443973541259765625', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('214733', '4.4847538167074443293813601485453546047210693359375', '47880.67', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-6531530', '2', '-3265765', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-34503279', '19100', '-1806.45', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0', '792.8997663984260952929616905748844146728515625', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-747.35584268368620541878044605255126953125', '339', '-2.2', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('14466', '-1489.094999615065944453817792236804962158203125', '-9.71', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('55009869', '-61601983', '-0.89', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-547944548', '-95619980', '5.73', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('186', '-87068', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-14504227.6842122785747051239013671875', '-586.74240652330990997143089771270751953125', '24719.92', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('14528.87158773970077163539826869964599609375', '-26.580363461876277852979910676367580890655517578125', '-546.6', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-95220.862117225377005524933338165283203125', '-73657649', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-39269.7983496197193744592368602752685546875', '760225588', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('0', '28', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('976.1470355210377647381392307579517364501953125', '-3946.71866103281308824080042541027069091796875', '-0.25', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-96783.569834814057685434818267822265625', '91585469', '0', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('-29928.9312452903468511067330837249755859375', '-87', '344.01', { maximumFractionDigits: 2, roundingMode: 'half even' })
  t('43261', '-29533.56317509416840039193630218505859375', '-1.46', { maximumFractionDigits: 2, roundingMode: 'half even' })
}
