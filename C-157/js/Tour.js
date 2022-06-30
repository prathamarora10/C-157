AFRAME.registerComponent("comics", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "black-panther",
        title: "Black Panther",
        url: "assets/thumbnails/black_panther_cover.jpeg",
      },
      {
        id: "shang-chi",
        title: "Shang Chi",
        url: "assets/thumbnails/clean.jpeg",
      },

      {
        id: "spider-man",
        title: "Spider Man",
        url: "assets/thumbnails/merlin_171454440_6136d614-7b89-4b28-83a5-cf18d9c14a36-mobileMasterAt3x.jpeg",
      },
      {
        id: "silver-surfer",
        title: "Silver Surfer",
        url: "assets/thumbnails/Silver_Surfer_Rebirth_Vol_1_1.jpeg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 7.5;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id)
      // Thumbnail Element
      const thumbnailEl = this.createThumbnail(item)
      borderEl.appendChild(thumbnailEl)
      // Title Text Element
      const titleEl = this.createTitle(position, item)
      borderEl.appendChild(titleEl)

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement('a-entity')

    entityEl.setAttribute('position', position)
    entityEl.setAttribute('id', id)
    entityEl.setAttribute('visible', true)
    entityEl.setAttribute('geometry', { primitive: 'plane', width: 22, height: 30 })
    entityEl.setAttribute('material', { color: 'white', opacity: 1 })

    entityEl.setAttribute("cursor-listener", {});
    return entityEl;
  },
  createThumbnail: function (item) {
    const entityEl = document.createElement('a-entity')

    entityEl.setAttribute('visible', true)
    entityEl.setAttribute('geometry', { primitive: 'plane', width: 20, height: 28 })
    entityEl.setAttribute('material', { src: item.url })
    entityEl.setAttribute('position', {x : 0, y : 0, z : 0.1})

    return entityEl;
  },
  createTitle: function (position, item) {
    const entityEl = document.createElement('a-entity')

    entityEl.setAttribute('text', { font: "exo2bold", width: 70, align: 'center', color: 'black', value: item.title })

    const elPosition = position
    elPosition.y = -30

    entityEl.setAttribute('position', elPosition)
    entityEl.setAttribute('visible', true)

    return entityEl;
  }

});
