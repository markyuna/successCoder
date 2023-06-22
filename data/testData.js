// Images Pixabay: https://pixabay.com/fr/users/jmexclusives-10518280/

const COURSES = [
  {
    id: '1',
    title: 'Fomation JavaScript Moderne',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://res.cloudinary.com/dxrttyi2g/image/upload/v1687389982/java_suy0du.jpg',
    price: 99.99,
    selected: false,
    instructorId: '2'
  }, 
  {
    id: '2',
    title: 'Coder facebook avec React JS',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://res.cloudinary.com/dxrttyi2g/image/upload/v1687390279/facebook_pmqgym.jpg',
    price: 49.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '3',
    title: 'Wordpress pour débutants',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://res.cloudinary.com/dxrttyi2g/image/upload/v1687390578/wordpress_oeka1z.jpg',
    price: 29.49,
    selected: false,
    instructorId: '5'
  }, 
  {
    id: '4',
    title: 'Maîtiser le logiciel Confluence',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://res.cloudinary.com/dxrttyi2g/image/upload/v1687390166/conflu_euyyph.jpg',
    price: 49.29,
    selected: false,
    instructorId: '1'
  },
  {
    id: '5',
    title: 'Python pour les débutants',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1496357900/fr/vectoriel/code-binaire-python-codage-logiciel-en-langage-python.jpg?s=1024x1024&w=is&k=20&c=sYvP2eRmXXaFJztsby7HoW5T4iNzeVhC-DWwrYzsphU=',
    price: 199.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '6',
    title: 'apprendre CSS3 ',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://res.cloudinary.com/dxrttyi2g/image/upload/v1687390709/css_dfecoz.jpg',
    price: 9.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '7',
    title: 'Formation PHP Orienté Objets',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://res.cloudinary.com/dxrttyi2g/image/upload/v1687390796/php_m12dst.jpg',
    price: 29.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '8',
    title: 'Formation SEO de 0 à PRO!',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://res.cloudinary.com/dxrttyi2g/image/upload/v1687390840/seo_ceow2b.jpg',
    price: 19.49,
    selected: false,
    instructorId: '1'
  },
  {
    id: '9',
    title: 'Formation Microsoft Clarity',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://res.cloudinary.com/dxrttyi2g/image/upload/v1687390909/clarity_g5rwjv.jpg',
    price: 29.45,
    selected: false,
    instructorId: '1'
  }
];

export default COURSES;