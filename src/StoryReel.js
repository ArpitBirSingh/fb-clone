import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
        image="https://images.cnbctv18.com/wp-content/uploads/2020/10/Bill-Gates-768x521.jpg"
        profileSrc="https://techstory.in/wp-content/uploads/2016/10/j1f9DiJi.jpeg"
        title="Bill Gates"
      />
      <Story
        image="https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL.jpg"
        profileSrc="https://www.casino-king.com/images/articles/elon-musk.jpg"
        title="Elon Musk"
      />
      <Story
        image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5b8576db31358e0429c734e3%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D211%26cropX2%3D2381%26cropY1%3D900%26cropY2%3D3072"
        profileSrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba2b3168-8c99-4a61-af16-a1acc7261c0f/d6aws47-35f96292-a405-430e-b891-42ef46e57f9b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYmEyYjMxNjgtOGM5OS00YTYxLWFmMTYtYTFhY2M3MjYxYzBmXC9kNmF3czQ3LTM1Zjk2MjkyLWE0MDUtNDMwZS1iODkxLTQyZWY0NmU1N2Y5Yi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.G3zMpieqGJFXYuCabi0GTN1qn6Wsk74jLQaTLzBoTmY"
        title="Steve Jobs"
      />
      <Story
        image="https://cnet2.cbsistatic.com/img/gG_novpNJ6AHkSC_svV9c4Vo9wg=/940x0/2016/04/12/886e8d78-7d58-4bba-834d-965d5bd88b5f/facebook-f8-zuckerberg-bots.jpg"
        profileSrc="https://s.abcnews.com/images/US/mark-zuckerberg-file-gty-ml-200113_hpEmbed_1x1_992.jpg"
        title="Mark Zuckerberg"
      />
      <Story
        image="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
        profileSrc="https://static01.nyt.com/images/2019/12/04/opinion/04Swisher/merlin_154357665_c4432ee5-830a-406a-a78d-82881bf64745-mobileMasterAt3x.jpg"
        title="Sundar Pichai"
      />
    </div>
    )
}

export default StoryReel;
