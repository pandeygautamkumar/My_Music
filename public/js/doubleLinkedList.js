// Creating a node
class Node {
  constructor(name, length, path) {
    this.musicNode = {
      name: name,
      length: length,
      path: path,
    };
    this.prev = null;
    this.next = null;
  }
}

// creating double liked list obj and pointer
class DoubllyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.tempPos = null;
  }

//Push node to DLL
  push(name, length, path) {
    const newNode = new Node(name, length, path);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  // set position of current node
  // default is pointer of head node
  setDefaulltPointer() {
    this.tempPos = this.head;
  }

  // traverse DLL and return music obj
  traverse(direction) {
    // forward direction
    if (direction === 1 && this.tempPos.next != null) {
      this.tempPos = this.tempPos.next;
      return this.tempPos.musicNode;
    } else if (direction === -1 && this.tempPos.prev != null) {
      //backward direction
      this.tempPos = this.tempPos.prev;
      return this.tempPos.musicNode;
    } else {
      return 0;
    }
  }

  // check for position of node
  nodePosition() {
    if (this.tempPos.next == null) {
      return -1; // last pos
    } else if (this.tempPos.prev == null) {
      return 1; // first pos
    } else {
      return 0; // middle pos
    }
  }
}

//inserting music in double linked list
const dll = new DoubllyLinkedList();
dll.push(
  "Kitni Haseen Hogi",
  1,
  "https://res.cloudinary.com/djgzmi5wy/video/upload/v1657201752/Music/Kitni_Haseen_Hogi_-_Arijit_Singh_trnlit.mp3"
);
dll.push(
  "Mehabooba KGF 2",
  2,
  "https://res.cloudinary.com/djgzmi5wy/video/upload/v1657201753/Music/Mehabooba_Hindi_-_KGF_2_t0kr2t.mp3"
);
dll.push(
  "Mareez-E-Ishq",
  3,
  "https://res.cloudinary.com/djgzmi5wy/video/upload/v1657201757/Music/Mareez-E-Ishq_Full_Video_-_ZiD_Ma__getmp3.pro_owqhbi.mp3"
);
dll.push(
  "Teri-Galiyan",
  4,
  "https://res.cloudinary.com/djgzmi5wy/video/upload/v1657200422/Music/Teri-Galiyan_320_PaglaSongs_rmk4qh.mp3"
);
dll.push(
  "Chale Aana",
  5,
  "https://res.cloudinary.com/djgzmi5wy/video/upload/v1657201760/Music/Chale_Aana_-_De_De_Pyaar_De_jayanh.mp3"
);
dll.push(
  "Jab Tak Hai",
  6,
  "https://res.cloudinary.com/djgzmi5wy/video/upload/v1657201765/Music/Saans_Jab_Tak_Hai_Jaan_.mp3_dkokhu.mp3"
);
dll.push(
  "Excuses",
  7,
  "https://res.cloudinary.com/djgzmi5wy/video/upload/v1657201771/Music/Excuses_-_Ap_Dhillon_etr0x9.mp3"
);
dll.push(
  "Saiyaara",
  8,
  "https://res.cloudinary.com/djgzmi5wy/video/upload/v1657201775/Music/Saiyaara_Ek_Tha_Tiger_udpvlk.mp3"
);
dll.push(
  "Saanson Ko",
  9,
  "https://res.cloudinary.com/djgzmi5wy/video/upload/v1657201799/Music/Saanson_Ko_Lyric_video_-_ZiD_Mann__getmp3.pro_a2gxyf.mp3"
);
dll.push(
  "Excellent Ramayan",
  10,
  "https://res.cloudinary.com/djgzmi5wy/video/upload/v1657201845/Music/Excellent_ramayan_group__getmp3.pro_mz4e4q.mp3"
);
dll.push(
  "Excellent Ramayan 2",
  11,
  "https://res.cloudinary.com/djgzmi5wy/video/upload/v1657201855/Music/Ramayantarj___getmp3.pro_qvjfdf.mp3"
);

dll.setDefaulltPointer();
