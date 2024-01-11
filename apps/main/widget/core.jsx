const routes = {
  home: {
    // project Id
    path: "hack.near/widget/dev.social",
    blockHeight: "final",
    init: {
      name: "Home",
      description: "Home",
      icon: "bi bi-house",
    },
  },
  discover: {
    path: "efiz.near/widget/Things.index",
    blockHeight: "final",
    init: {
      icon: "bi bi-globe",
    },
  },
  tree: {
    path: "efiz.near/widget/Tree",
    blockHeight: "final",
    init: {
      icon: "bi bi-tree",
    },
  },
  search: {
    path: "chaotictempest.near/widget/Search",
    blockHeight: "final",
    init: {
      icon: "bi bi-search",
    },
  },
  create: {
    path: "create.near/widget/home",
    blockHeight: "final",
    init: {
      icon: "bi bi-plus-circle",
    },
  },
  events: {
    path: "itexpert120-contra.near/widget/Events",
    blockHeight: "final",
    init: {
      icon: "bi bi-calendar",
    },
  },
  editor: {
    path: "every.near/widget/editor",
    blockHeight: "final",
    init: {
      icon: "bi bi-pencil",
    },
  },
  hashtag: {
    path: "efiz.near/widget/every.hashtag",
    blockHeight: "final",
    init: {
      icon: "bi bi-hash",
    },
  },
  social: {
    path: "mob.near/widget/N",
    blockHeight: "final",
    init: {
      icon: "bi bi-people",
    },
  },
  map: {
    path: "hack.near/widget/Map.tutorial",
    blockHeight: "final",
    init: {
      icon: "bi bi-map",
    },
  },
  marketplace: {
    path: "mintbase.near/widget/nft-marketplace",
    blockHeight: "final",
    init: {
      icon: "bi bi-cart",
    },
  },
  blocks: {
    path: "devs.near/widget/Module.Feed.demo",
    blockHeight: "final",
    init: {
      icon: "bi bi-boxes",
    },
  },
  voyager: {
    path: "efiz.near/widget/voyager.index",
    blockHeight: "final",
    init: {
      icon: "bi bi-rocket",
    },
  },
  video: {
    path: "efiz.near/widget/App.index",
    blockHeight: "final",
    init: {
      icon: "bi bi-camera-video",
    },
  },
  files: {
    path: "hyperfiles.near/widget/app",
    blockHeight: "final",
    init: {
      icon: "bi bi-files",
    },
  },
  graph: {
    path: "efiz.near/widget/SocialGraph",
    blockHeight: "final",
    init: {
      icon: "bi bi-stars",
    },
  },
  plugins: {
    path: "embeds.near/widget/Plugin.Index",
    blockHeight: "final",
    init: {
      icon: "bi bi-plug",
    },
  },
  build: {
    path: "buildhub.near/widget/Feed",
    blockHeight: "final",
    init: {
      icon: "bi bi-hammer",
    },
  },
  music: {
    path: "jaswinder.near/widget/MusicPlayer-Harmonic",
    blockHeight: "final",
    init: {
      icon: "bi bi-music-note",
    },
  },
};

return <Widget src={"every.near/widget/app"} props={{ routes, path: "", ...props }} />;
