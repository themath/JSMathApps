distancetoscreen = 1.5;
dts = 1.5;
widthofscreen = 9.5/12.0;
wos = 9.5/12.0;

function plotedges(edgesf,zdel){

templen = edgesf.length;

edgesf[templen] = [xmin, 0.0, 0.0, xmax, 0.0, 0.0];
edgesf[templen+1] = [0.0, ymin, 0.0, 0.0, ymax, 0.0];
edgesf[templen+2] = [0.0, 0.0, -30.0, 0.0, 0.0, 30.0];


var c = document.getElementById('cancan');
var ctx = c.getContext('2d');

if(zdel===1) ctx.clearRect(0,0,600,600);


for(a=0;a<edgesf.length;a++)
{
txa=edgesf[a][0] - viewerdata[0][0];
tya=edgesf[a][1] - viewerdata[0][1];
tza=edgesf[a][2] - viewerdata[0][2];
txb=edgesf[a][3] - viewerdata[0][0];
tyb=edgesf[a][4] - viewerdata[0][1];
tzb=edgesf[a][5] - viewerdata[0][2];

zzyay0 = Math.floor(222.0*(edgesf[a][0]-xmin)/(xmax - xmin)+17.0);

zzyay1 = Math.floor(222.0*(edgesf[a][3]-xmin)/(xmax - xmin)+17.0);

zzyay2 = Math.floor(222.0*(edgesf[a][1]-ymin)/(ymax - ymin)+17.0);

zzyay3 = Math.floor(222.0*(edgesf[a][4]-ymin)/(ymax - ymin)+17.0);


zb = 2.0*Math.PI*rdiv/ndiv;

tx11=txa*Math.cos(-zb) - tya*Math.sin(-zb);
ty11=txa*Math.sin(-zb) + tya*Math.cos(-zb);
tz11=-tza;

tx21=txb*Math.cos(-zb) - tyb*Math.sin(-zb);
ty21=txb*Math.sin(-zb) + tyb*Math.cos(-zb);
tz21=-tzb;

zbz = 2.0*Math.PI*rdivz.toFixed(3)/ndivz.toFixed(3);

tx1=tx11*Math.cos(zbz) - tz11*Math.sin(zbz);
ty1=ty11;
tz1=tx11*Math.sin(zbz) + tz11*Math.cos(zbz);

tx2=tx21*Math.cos(zbz) - tz21*Math.sin(zbz);
ty2=ty21;
tz2=tx21*Math.sin(zbz) + tz21*Math.cos(zbz);

tx1 = tx1;
ty1 = ty1;
tz1 = tz1; 
tx2 = tx2;
ty2 = ty2;
tz2 = tz2; 

zzaa=1.0;

if((tx1>0) && (tx2>0))
{

var grad= ctx.createLinearGradient(zzaa*ty1/tx1*600+300, zzaa*tz1/tx1*600+300, zzaa*ty2/tx2*600+300, zzaa*tz2/tx2*600+300);


grad.addColorStop(0, "#00"+zzyay3.toString(16)+zzyay1.toString(16));

grad.addColorStop(1, "#00"+zzyay2.toString(16)+zzyay0.toString(16));

ctx.strokeStyle = grad;


ctx.beginPath();
ctx.moveTo(zzaa*ty1/tx1*600+300,zzaa*tz1/tx1*600+300);
ctx.lineTo(zzaa*ty2/tx2*600+300,zzaa*tz2/tx2*600+300);
ctx.stroke();
}
}
}

function plotbird() {

var czz = document.getElementById('birdcan');
var ctxz = czz.getContext('2d');

ctxz.clearRect(0,0,200,200);

ctxz.beginPath();

txpos=viewerdata[0][0]*5 + 100;
typos=viewerdata[0][1]*5 + 100;

ctxz.moveTo(txpos,typos);
ctxz.lineTo(txpos+10*(Math.cos(rdiv*Math.PI/16)),typos-10*(Math.sin(rdiv*Math.PI/16)));
ctxz.stroke();

}