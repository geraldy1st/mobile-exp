import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'apple',
          logo:
            'https://static.swappa.com/static/images/brands/logo_btn_apple.svg',
          imageUrl:
            'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          id: 1,
          linkUrl: 'apple',
        },
        {
          title: 'samsung',
          logo:
            'https://static.swappa.com/static/images/brands/logo_btn_samsung.svg',

          imageUrl:
            'https://img.phonandroid.com/2020/02/Samsung-Galaxy-S20plus.jpg',
          id: 2,
          linkUrl: 'samsung',
        },
        {
          title: 'google',
          logo:
            'https://static.swappa.com/static/images/brands/logo_btn_google.svg',

          imageUrl:
            'https://images.idgesg.net/images/article/2019/10/pixel-phones-100814817-large.jpg',
          id: 3,
          linkUrl: 'google',
        },
        {
          title: 'LG',
          logo:
            'https://static.swappa.com/static/images/brands/logo_btn_lg.svg',

          imageUrl:
            'http://www.lgnewsroom.com/wp-content/uploads/2019/09/LG-G8X-ThinQ-and-LG-Dual-Screen_01.jpg',
          id: 4,
          linkUrl: 'lg',
        },
        {
          title: 'motorola',
          logo:
            'https://static.swappa.com/static/images/brands/logo_btn_motorola.svg',

          imageUrl:
            'https://andro4all.com/files/2019/02/Moto-Razr-2019-concepto.jpg',
          id: 5,
          linkUrl: 'motorola',
        },
        {
          title: 'xiaomi',
          logo:
            'https://as01.epimg.net/showroom/imagenes/2019/08/10/portada/1565444005_544487_1565446598_noticia_normal_recorte1.jpg',

          imageUrl:
            'https://www.journaldugeek.com/content/uploads/2020/04/rn8pro-image-1-640x467.jpg',
          id: 6,
          linkUrl: 'xiaomi',
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
