export default {
  name: "timeline_item",
  title: "item",
  type: "object",
  fieldsets: [
    {
      name: "links_section",
      title: "Links",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
  ],
  fields: [
    { name: "title", title: "Title ", type: "string" },

    {
      name: "date_format",
      title: "Date Format Option",
      type: "string",
      initialValue: "start_date",
      options: {
        list: [
          { title: "Date Only", value: "start_date" },
          { title: "Date with time", value: "start_time" },
        ],
      },
    },
    {
      name: "start_date",
      title: "Date only",
      hidden: ({ parent }) => parent?.date_format != "start_date",
      type: "date",
      description: "When was this item created?",
    },
    {
      name: "start_time",
      title: "Date with Time",
      hidden: ({ parent }) => parent?.date_format != "start_time",
      type: "datetime",
      description: "When was this item created?",
    },
    {
      name: "end_date",
      title: "End Date",
      hidden: ({ parent }) => parent?.date_format == "start_time",
      type: "date",
      description: "When does this item end?",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "item_image",
      title: "Image Item",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image Component",
          type: "object",
          fields: [
            { name: "image", title: "Image", type: "image" },
            { name: "caption", title: "Caption", type: "string" },
            {
              name: "published_time",
              title: "Published time",
              type: "datetime",
              options: {
                dateFormat: "YYYY-MM-DD",
                timeFormat: "",
              },
            },
          ],
          initialValue: () => ({
            published_time: new Date().toISOString(),
          }),
        },
      ],
    },
    {
      title: "Link",
      name: "link",
      type: "url",
      fieldset: "links_section",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
    {
      title: "text",
      name: "Text",
      type: "string",
      fieldset: "links_section",
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
  ],
};
