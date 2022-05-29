import backgroundSpace from "../assets/stars.jpeg";
import Logo from "../assets/ASLogo.png";
import playerSheet from "../assets/sheet.png";
import keys from "../assets/keyboard.png";

export default class Title extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });
  }

  preload() {
    this.load.spritesheet("space", backgroundSpace, {
      frameWidth: 500,
      frameHeight: 500,
    });

    this.load.spritesheet("mainCharacter", playerSheet, {
      frameWidth: 102,
      frameHeight: 110,
    });

    this.load.image("logo", Logo);

    this.load.image("keys", keys);
  }

  create() {
    // themeMusic = this.sound.add('theme', { volume: 0.2 });
    // if (!this.sound.locked){
    //         // already unlocked so play
    //         themeMusic.play();
    //     }else{
    //         // wait for 'unlocked' to fire and then play
    //         this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
    //             themeMusic.play();
    //         })
    // }
    const player1 = this.physics.add
      .staticSprite(400, 143, "mainCharacter")
      .setScale(0.8);
    player1.setDepth(10);

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("mainCharacter", {
        start: 0,
        end: 7,
      }),
      frameRate: 5,
      repeat: -1,
    });
    player1.anims.play("idle", true);

    this.anims.create({
      key: "backgroundAnim",
      frames: this.anims.generateFrameNumbers("space", { start: 0, end: 4 }),
      framerate: 10,
      repeat: -1,
    });

    const spaceBackground = this.add.sprite(400, 300, "space");
    spaceBackground.setDepth(2);
    spaceBackground.setScale(1.6);
    spaceBackground.anims.play("backgroundAnim", true);
    console.log(spaceBackground.anims);

    const positions = {
      centerX: this.physics.world.bounds.width / 2,
      centerY: this.physics.world.bounds.height / 2,
      topEdge: 0,
      rightEdge: this.physics.world.bounds.width,
      bottomEdge: this.physics.world.bounds.height,
      leftEdge: 0,
    };

    const mainLogo = this.add
      .image(positions.centerX, positions.centerY, "logo")
      .setOrigin(0.5, 2)
      .setDepth(10);

    //    this.add.text(positions.centerX, positions.centerY, 'AstroCat!').setOrigin(0.5, 0.5), { fontSize: "20px"} ;

    const startGameButton = this.add
      .text(positions.centerX, positions.centerY + 50, "CLICK TO START", {
        fontFamily: "Arial",
        fill: "#ffffff",
        fontSize: 50,
        color: "#ffffff",
      })
      .setOrigin(0.5);
    startGameButton.setInteractive({ useHandCursor: true });
    startGameButton.setDepth(10);

    const mainKeys = this.add
      .image(positions.centerX, positions.centerY, "keys")
      .setOrigin(0.5, -2)
      .setDepth(10)
      .setScale(0.2);

    this.input.on("pointerdown", () => {
      this.scene.stop("Title");
      this.scene.start("Game");
      // themeMusic.stop();
    });
  }
}
