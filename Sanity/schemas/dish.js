export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish name',
      validation: (Rule) => Rule.required(),
    },{
      name: 'description',
      type: 'string',
      title: 'short_Description',
      validation: (Rule) => Rule.required().max(200),

    },{
      name: 'image',
      type: 'image',
      title: 'Image of the dish',

    },  
    {
      name: 'price',
      type: 'number',
      title: 'Price of the dish in Tsh',
    }
  ]
}
