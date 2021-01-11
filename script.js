
	// --------------------------

	var pg;
	var img;

	var cam = [];
	var por = [];

	var x = 0;
	var z = -400;
	var w = 0;

	var alt = 1;

	// ----

	function preload() {
		fontRegular = loadFont('font/futura medium bt.ttf');
		fontBold = loadFont('font/Futura Heavy font.ttf');

		por1 = loadImage('harold.png');
		por2 = loadImage('root.png');
		por3 = loadImage('john.png');
		por4 = loadImage('shaw.png');
		por = [por1,por2,por3,por4];

		img1 = loadImage('pic1.png');
		img2 = loadImage('pic2.png');
		img3 = loadImage('pic3.png');
		img4 = loadImage('pic4.png');
		img5 = loadImage('pic5.png');
		img6 = loadImage('pic6.png');
		img7 = loadImage('pic7.png');
		img8 = loadImage('pic8.png');
		img9 = loadImage('pic9.png');
		img10 = loadImage('pic10.png');
		img11 = loadImage('pic11.png');
		img12 = loadImage('pic12.png');
		img13 = loadImage('pic13.png');
		img14 = loadImage('pic14.png');
		img15 = loadImage('pic15.png');
		img16 = loadImage('pic16.png');
		img17 = loadImage('pic17.png');
		img18 = loadImage('pic18.png');
		img19 = loadImage('pic19.png');
		img20 = loadImage('pic20.png');
		cam = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20];

	}

	function setup() {
		g = createGraphics(200,150);

		createCanvas(windowWidth, windowHeight, WEBGL);
		pixelDensity(1);

		pg = createGraphics(windowWidth, windowHeight, WEBGL);

		pg.pixelDensity(1);
		// pg.show();
		// pg.style("display", "inline");
	}


	// --------------------------

	var Plane = [];
	function PlaneCreation(a, b, c, d, e){
		this.posX = a;
		this.posY = b;
		this.posZ = c;
		this.type = d;
		this.img = e;

		Plane.push(this);
    };

	function setPlane(a,b) {

		var carre = 50000;

		for(var i=0; i < 3000; i++){

			xx = Random(a-carre,a+carre);
			yy = Random(-12000,12000);
			zz = Random(b-carre,b+carre);

			ii = Random(0,cam.length-1);
			new PlaneCreation(
				xx,
				yy,
				zz,
				1,
				ii,
			)

		}

	}

	function affPlane() {
		w = 0;
		for(var i=0; i < Plane.length; i++){

			translate(Plane[i].posX, Plane[i].posY, Plane[i].posZ);

			// ne pas afficher ceux derriere la camera && ne pas afficher sur trop loin
			if (-z > Plane[i].posZ && -z - 50000 < Plane[i].posZ) {
				if (x - 30000 < Plane[i].posX && x + 30000 > Plane[i].posX) {

					texture(cam[Plane[i].img]);

					t = 500;
					plane(t,t*0.56);

					w += 1;
				}
			}

			translate(-Plane[i].posX, -Plane[i].posY, -Plane[i].posZ);
		}

	}

	// --------------------------

	var P = [];
	function pCreation(image, name, lastname, SSN, DOB, POB, adress, occupation, classification, status, a, b, c, description, archive, x, y, z){
		this.image = image;
		this.name = name;
		this.lastname = lastname;
		this.SSN = SSN; // numero de securite social
		this.DOB = DOB; // lieu de naissance
		this.POB = POB; // date de naissance
		this.adress = adress;
		this.occupation = occupation;
		this.classification = classification; // admin - irrelevant ..
		this.status = status; // vivant - mort

		this.linkA = a; // collegues
		this.linkB = b; // famille - conjoint
		this.linkC = c; // connaissance direct
		this.description = description;
		this.archive = archive;

		this.x = x;
		this.y = y;
		this.z = z;

		this.g = 0;

		P.push(this);
    };

		new pCreation(
			0,
			'Harold',
			'Finch',
			5492,
			'Lassiter, Iowa, USA',
			'unknown',
			'New York, NY, USA',
			'Software enginee',
			'ADMIN',
			'Alive',

			[1,2,3],
			[6],
			[4,5],

			'Harold Finch is a reclusive billionaire software genius who built a machine that predicts future crimes',
			[1,2,3],

			0,
			400,
			0,
		);

		// -----

	var Obj = [];
	function objCreation(a, b, c, d, e, f, g, h){
		this.posX = a;
		this.posY = b;
		this.posZ = c;
		this.w = d;
		this.h = e;
		this.type = f;
		this.img = g;
		this.text = h;

		this.g = createGraphics(d +100, e +100);

		Obj.push(this);
    };

	function setObj() {
		// posX, posY, posZ, w, h, type, img, text
		new objCreation(0,400,0,250,285,1,0,'Harold');
		new objCreation(-400,0,-200,200,230,1,2,'John');
		new objCreation(-650,0,-200,200,230,1,1,'Root');
		new objCreation(-900,0,-200,200,230,1,3,'Shaw');

		for(var i=0; i < Obj.length; i++){
			Obj[i].g.fill('rgba(0,0,0, 0)');
			Obj[i].g.strokeWeight(0.9);
			Obj[i].g.stroke(255);
			Obj[i].g.rect(10,10,Obj[i].w,Obj[i].h);

			Obj[i].g.fill(255);
			Obj[i].g.stroke(255);
			Obj[i].g.strokeWeight(2);

			Obj[i].g.line(3,3,3,10);
			Obj[i].g.line(3,3,16,3);

			Obj[i].g.line(Obj[i].w+16,3,Obj[i].w+16,10);
			Obj[i].g.line(Obj[i].w+16,3,Obj[i].w,3);

			Obj[i].g.line(Obj[i].w+16,Obj[i].h+16,Obj[i].w+16,Obj[i].h+6);
			Obj[i].g.line(Obj[i].w+16,Obj[i].h+16,Obj[i].w,Obj[i].h+16);

			Obj[i].g.line(3,Obj[i].h+16,3,Obj[i].h+6);
			Obj[i].g.line(3,Obj[i].h+16,16,Obj[i].h+16);

			Obj[i].g.noStroke();
			Obj[i].g.fill(255);
			Obj[i].g.textSize(7);
			Obj[i].g.textFont(fontRegular);
			Obj[i].g.text('INDEX HAROLD FINCH #001',8,Obj[i].h + 36);
			Obj[i].g.text('3R35J789J3YTG',8,Obj[i].h + 46);
		}

	}



	function affObj(a) {

		if (a === 1) {

			for(var i=0; i < Obj.length; i++){
				if (-z > Obj[i].posZ && -z - 15000 < Obj[i].posZ) {
					if (x - 7000 < Obj[i].posX && x + 7000 > Obj[i].posX) {
						translate(Obj[i].posX, Obj[i].posY, Obj[i].posZ);

						if (Obj[i].type == 1) {

							texture(por[Obj[i].img]);

							plane(Obj[i].w,Obj[i].h);

							translate(-Obj[i].posX, -Obj[i].posY, -Obj[i].posZ);

							// ----

							translate(Obj[i].posX+40, Obj[i].posY+40, Obj[i].posZ);
							texture(Obj[i].g);
							plane(Obj[i].w +100, Obj[i].h +100);
							translate(-(Obj[i].posX+40), -(Obj[i].posY+40), -Obj[i].posZ);

							// ----
						}


					}
				}
			}

		}

		if (a === 2) {

			for(var i=0; i < Obj.length; i++){

				if (-z > Obj[i].posZ && -z - 15000 < Obj[i].posZ) {
					if (x - 7000 < Obj[i].posX && x + 7000 > Obj[i].posX) {
						pg.translate(Obj[i].posX, Obj[i].posY, Obj[i].posZ);

						pg.fill(i+1,0,0);
						if (Obj[i].type == 1) {
							pg.plane(Obj[i].w,Obj[i].h);
						}

						pg.translate(-Obj[i].posX, -Obj[i].posY, -Obj[i].posZ);
					}
				}

			}

		}

	}

	// --------------------------

	// ---- fonction 2d plane
	function TextureCreation(w,h,xx,yy,id,text){

		translate(-width/2 + w/2 +xx, -height/2 + h/2 +yy, 20);

		ec = 1.5;
		g = createGraphics(w + ec * 2, h + ec * 2);

		// ----- fond
		g.strokeWeight(ec);
		g.stroke(255);

		g.fill('rgba(10,10,10, 0.70)');
		g.rect(ec/2, ec/2, w, h, 3);
		g.rect(ec/2, ec/2, w, h, 3);
		g.noStroke();

		// ---- bandes noires
		g.fill(0);
		g.rect(ec, ec, w - ec, 20, 3, 3, 0, 0);
		g.rect(ec, h - 20, w - ec, 20, 0, 0, 3, 3);

		// ---- bande blanche
		g.fill(255);
		g.rect(0, 20 + ec, w, 14);

		// ---- titre 1
		g.fill(255,0,0);
		g.textSize(11);
		g.textFont(fontBold);
		g.text('[ ! ]', 7, 15);

		g.fill(255,0,0);
		g.textSize(13);

		g.textFont(fontBold);
		g.text('WARNING', 30, 16.5);

		// ---- titre 2
		g.fill(0);
		g.textSize(11);
		g.textFont(fontRegular);
		g.text('INFORMATION', 7, 32);

		// ---- texte interne
		g.fill(255);
		g.textSize(13);
		g.textFont(fontBold);
		g.text(text, 7, 50);

		texture(g);
		plane(w,h);
	}

	// --------------------------

	function mouseClicked() {

		var mouseObj = getObject(mouseX, mouseY);

		for(var i=0; i < Obj.length; i++){
			if (mouseObj == i+1) { alert(Obj[i].text); }
		}

	}

	function draw() {

		// ---- initialisation
		if (alt === 1) {
			setPlane(0,0);

			setObj();

			alt = 0;
		}

		var deplacement = 150;
		// ---- controle clavier
		if (keyIsDown(LEFT_ARROW)) {
			x -= deplacement;
		}

		if (keyIsDown(RIGHT_ARROW)) {
			x += deplacement;
		}

		if (keyIsDown(DOWN_ARROW)) {
			z -= deplacement;
		}

		if (keyIsDown(UP_ARROW)) {
			z += deplacement;
		}

		// ---- canvas
		drawBackgroundBuffer();

		drawActiveCanvas();

	}

	function drawActiveCanvas(){

		// fond et caméra
		resetMatrix();
		background(8,8,8);

		perspective(PI/3.0, width/height, ((height/2.0) / tan(PI*60.0/360.0))/10.0, 35000);
		camera(x, height/2, (height/2) / tan(PI/6) - z, x, height/2, 0 - z, 0, 1, 0);

		affPlane();

		// ---- données interactives

		// x : -400 / z : 0 / harold
		fill(255);
		strokeWeight(1.8);
		stroke(255);
		line(-125,400,0,-300,0,-200);


		affObj(1);
		// ---- passage en mode 2d
		translate(x, height/2, -z);

		// TextureCreation(200,150,40,40,1,x + ' // ' + z + ' // ' + w);


	}

	function drawBackgroundBuffer() {

		pg.resetMatrix();
		pg.camera(x, height/2, (height/2) / tan(PI/6) - z, x, height/2, 0 - z, 0, 1, 0);
		pg.perspective(PI/3.0, width/height, ((height/2.0) / tan(PI*60.0/360.0))/10.0, 35000);
		pg.background(0);

		affObj(2);
	}

	// --------------------------

	function getObject(mx, my) {
		if (mx > width || my > height) {
			return 0;
		}

		var gl = pg.elt.getContext('webgl');
		var pix = getPixels();

		var index = 4 * ((gl.drawingBufferHeight-my) * gl.drawingBufferWidth + mx);

		return pix[index];
	}

	function getPixels() {
		var gl = pg.elt.getContext('webgl');
		var pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
		gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
		return (pixels);
	}

	// ----

	function Random(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}
