const accountId = context.accountId || "root.near";
const itemDescription =
  'The identifier item. It will be used as a unique identifier of the entity that receives the action. It\'s also used as a key of the action in the index.\nThe item should be an object with the following keys: `type`, `path` and optional `blockHeight`.\n- `type`: If the data is stored in the social DB, then the type is likely `"social"`, other types can be defined in the standards.\n- `path`: The path to the item. For a `"social"` type, it\'s absolute path within SocialDB, e.g. `alice.near/post/main`.\n- `blockHeight`: An optional paremeter to indicate the block when the data was stored. Since SocialDB data can be overwritten to save storage, the exact data should be referenced by the block height (e.g. for a given post). But if the latest data should be used, then `blockHeight` should be ommited.\n\nExamples of `item`:\n- `{type: "social", path: "mob.near/widget/N.Library"}`\n- `{type: "social", path: "mob.near/post/main", blockHeight: 81101335}`\n';

return {
  title: "Social Components Library",
  description:
    "This library contains common social components used by near.social",
  components: [
    {
      title: "Profile Block",
      category: "Profile",
      type: "widget",
      authorId: "mob.near",
      name: "Profile.InlineBlock",
      description:
        "Profile block for a given account ID with a picture, name, premium checkmark, account ID, a list of tags and the description",
      demoProps: { accountId },
      requiredProps: {
        accountId: "The account ID of the profile",
      },
      optionalProps: {
        profile: "Object that holds profile information to display",
        fast: "Render profile picture faster using external cache, default true if the `props.profile` is not provided",
        hideDescription: "Don't show description, default false",
      },
    },
    {
      title: "Profile Short Block",
      category: "Profile",
      type: "widget",
      authorId: "mob.near",
      name: "Profile.ShortInlineBlock",
      description:
        "Short profile block for a given account ID with a picture, name, premium checkmark, account ID",
      demoProps: { accountId, tooltip: true },
      requiredProps: {
        accountId: "The account ID of the profile",
      },
      optionalProps: {
        profile: "Object that holds profile information to display",
        fast: "Render profile picture faster using external cache, default true if the `props.profile` is not provided",
        tooltip:
          "Display overlay tooltip when you hover over the profile, default false",
      },
    },
    {
      title: "Profile Line",
      category: "Profile",
      type: "widget",
      authorId: "mob.near",
      name: "N.ProfileLine",
      description:
        "Profile line for a given account ID with a picture, name, premium checkmark, account ID. It's highly customizable and is useful to embed into a text or a single line",
      demoProps: { accountId, tooltip: true },
      requiredProps: {
        accountId: "The account ID of the profile",
      },
      optionalProps: {
        link: "Whether to make profile clickable with a link to the profile page, default true.",
        hideAccountId: "Don't show account ID, default false",
        hideName: "Don't show profile name, default false",
        hideImage: "Don't show profile picture, default false",
        hideCheckmark: "Don't show premium checkmark, default false",
        profile: "Object that holds profile information to display",
        fast: "Render profile picture faster using external cache, default true if the `props.profile` is not provided",
        title:
          'Optional title when you hover over the profile. Default `"${name} ${accountId}"`',
        tooltip:
          "Display overlay tooltip or title when you hover over the profile, default false. Will display a custom title if tooltip is given. If tooltip is true, the full tooltip is displayed. Default false",
      },
    },
    {
      title: "Profile Picture",
      category: "Profile",
      type: "widget",
      authorId: "mob.near",
      name: "ProfileImage",
      description:
        "Profile picture for a given account ID. It's highly customizable with style and classes.",
      demoProps: { accountId, fast: true },
      requiredProps: {
        accountId: "The account ID of the profile",
      },
      optionalProps: {
        className:
          'HTML class name for the image wrapper, default `"profile-image d-inline-block"`',
        style:
          'React DOM styles for the image wrapper, default `{ width: "3em", height: "3em" }`',
        imageStyle:
          'React DOM styles for the image, default `{ objectFit: "cover" }`',
        imageClassName:
          'HTML class name for the image, default `"rounded-circle w-100 h-100"`',
        thumbnail:
          'Thumbnail type, can be `"large"`, `"thumbnail"` or `null`, default is `"thumbnail"`',
        profile: "Object that holds profile information to display",
        fast: "Render profile picture faster using external cache, default true if the `props.profile` is not provided",
        title:
          'Optional title when you hover over the profile. Default `"${name} ${accountId}"`',
        tooltip:
          "Display overlay tooltip or title when you hover over the profile, default false. Will display a custom title if tooltip is given. If tooltip is true, the full tooltip is displayed. Default false",
      },
    },
    {
      title: "Profile Large",
      category: "Profile",
      type: "widget",
      authorId: "mob.near",
      name: "ProfileLarge",
      description:
        "Large profile block for a given account ID. It's used to display the top part of the profile page",
      demoProps: { accountId },
      requiredProps: {
        accountId: "The account ID of the profile",
      },
      optionalProps: {
        link: "Whether to make profile name clickable with a given link. Can be `true`, `false` or a string with the URL, default `false`.",
        showEditButton:
          "Whether to show the Edit Profile button, default false. But it'll be displayed in case the `profile` object is not given",
        profile: "Object that holds profile information to display",
      },
    },
    {
      title: "Like Button",
      category: "Button",
      type: "widget",
      authorId: "mob.near",
      name: "N.LikeButton",
      description:
        "A like button for a given item. It automatically keeps track of the number of unique likes and let a signed-in user to like the given item. See definition of the item in props",
      demoProps: {
        item: {
          type: "social",
          path: "mob.near/widget/N.Library",
        },
      },
      requiredProps: {
        item: itemDescription,
      },
      optionalProps: {
        notifyAccountId:
          "Which account ID should be notified when a user likes the item. The user will receive a notification with the item included. Default `undefined`",
      },
    },
    {
      title: "Repost Button",
      category: "Button",
      type: "widget",
      authorId: "mob.near",
      name: "N.RepostButton",
      description:
        "A repost button for a given item (usually a post). It automatically keeps track of the number of reposts and let a signed-in user to repost the given item. See definition of the item in props",
      demoProps: {
        item: {
          type: "social",
          path: "mob.near/post/main",
          blockHeight: 81101335,
        },
      },
      requiredProps: {
        item: itemDescription,
      },
      optionalProps: {
        notifyAccountId:
          "Which account ID should be notified when a user likes the item. The user will receive a notification with the item included. Default `undefined`",
      },
    },
    {
      title: "Post",
      category: "Feed",
      type: "widget",
      authorId: "mob.near",
      name: "MainPage.N.Post",
      description: "TBD",
      demoProps: {
        accountId: "mob.near",
      },
      requiredProps: {},
      optionalProps: {},
    },
    {
      title: "Comment",
      category: "Feed",
      type: "widget",
      authorId: "mob.near",
      name: "MainPage.N.Comment",
      description: "TBD",
      demoProps: {
        accountId: "mob.near",
      },
      requiredProps: {},
      optionalProps: {},
    },
    {
      title: "Comment Feed",
      category: "Feed",
      type: "widget",
      authorId: "mob.near",
      name: "MainPage.N.Comment.Feed",
      description: "TBD TODO WRAPPER",
      demoProps: {
        accountId: "mob.near",
      },
      requiredProps: {},
      optionalProps: {},
    },
    {
      title: "Compose",
      category: "Utils",
      type: "widget",
      authorId: "mob.near",
      name: "MainPage.N.Common.Compose",
      description: "TBD",
      demoProps: {
        text: "# Hello",
      },
      requiredProps: {},
      optionalProps: {},
    },
    {
      title: "Social Markdown",
      category: "Utils",
      type: "widget",
      authorId: "mob.near",
      name: "N.SocialMarkdown",
      description: "TBD",
      demoProps: {
        text: "# Hello",
      },
      requiredProps: {},
      optionalProps: {},
    },
    {
      title: "Social Markdown",
      category: "Utils",
      type: "widget",
      authorId: "mob.near",
      name: "N.SocialMarkdown",
      description: "TBD",
      demoProps: {
        text: "# Hello",
      },
      requiredProps: {},
      optionalProps: {},
    },
  ],
};
