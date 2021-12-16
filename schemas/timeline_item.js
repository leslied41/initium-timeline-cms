export default {
  name: "timeline_item",
  title: "item",
  type: "object",
  fields: [
    { name: "title", title: "Title ", type: "string" },
    {
      name: "date",
      title: "Date",
      type: "date",
      description: "When was this item created?",
    },
    {
      name: "end_date",
      title: "End Date",
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
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Link",
      name: "link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
  ],
};
