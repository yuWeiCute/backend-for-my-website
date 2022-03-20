import { GiNotebook } from 'react-icons/gi';

export default {
  name: 'pin',
  title: 'Pin',
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          name:'category',
          title:'Category',
          type:'string'
        }
      ],
      // validation: Rule => Rule.unique()
    },

    // body
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'richtext',
      title: 'Richtext',
      type: 'string',
    },
    // 发布者的id
    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    //
    {
      name: 'save',
      title: 'Save',
      type: 'array',
      of: [{ type: 'save' }],
      validation: Rule => Rule.unique()
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'comment' }],
    },
  ],

};
