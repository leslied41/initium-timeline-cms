export default {
  name: "pages",
  title: "Pages",
  type: "document",
  fieldsets: [
    {
      name: "settings",
      title: "Settings",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
  ],
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },

    //settings
    //settings- color mode
    {
      name: "color_mode",
      title: "Color Mode",
      type: "string",
      fieldset: "settings",
      options: {
        list: [
          { title: "Dark", value: "Dark" },
          { title: "Light", value: "Light" },
          { title: "Color", value: "Color" },
        ],
      },
    },
    //settings- layout mode
    {
      name: "layout",
      title: "Layout Mode",
      type: "string",
      fieldset: "settings",
      options: {
        list: [
          { title: "Standard", value: "Standard" },
          { title: "Gallery", value: "Gallery" },
        ],
      },
    },

    //cover component
    {
      name: "cover_component",
      title: "Cover Component",
      type: "object",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
      fields: [
        { name: "title", title: "Title ", type: "string" },
        { name: "caption", title: "Caption", type: "string" },
        {
          name: "date",
          title: "Date",
          type: "datetime",
          description: "When does the cover created?",
        },
        {
          name: "description",
          title: "Description",
          type: "blockContent",
        },
        {
          name: "bd_image",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    //main component
    {
      name: "main_component",
      title: "Main Component",
      type: "array",
      of: [{ type: "timeline_item" }],
    },
  ],
};
