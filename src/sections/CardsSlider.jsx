import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Card2 } from '../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {rightArrow, leftArrow} from '../assets'

const CardsSlider = ({title, products}) => {

    const [slidesPerView, setSlidesPerView] = useState(3);

    const slidePrev = () => {
        if (swiper) {
          swiper.slidePrev();
        }
      };
    
      const slideNext = () => {
        if (swiper) {
          swiper.slideNext();
        }
      };
    
      let swiper;

      useEffect(() => {
        function handleResize() {
          // Adjust the number of slides per view based on screen width
          if (window.innerWidth >= 1024) {
            setSlidesPerView(3);
          } else if (window.innerWidth >= 600) {
            setSlidesPerView(2);
          } else {
            setSlidesPerView(1);
          }
        }
    
        handleResize();
    
        // Listen for window resize events
        window.addEventListener('resize', handleResize);
    
        return () => {
          // Clean up the event listener when the component unmounts
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    

  return (
    <div className='py-40 w-full bg-[#f9f9f9]'>
        <div className='container relative'>
            <div className='flex justify-between items-center py-5'>
                <h1 className="text-3xl text-gray-700 font-circular">{title}</h1>
                <a href="/templates" className="font-circular  text-gray-600 border border-gray-200  hover:border-gray-300 px-4 py-2.5 rounded-[50px] bg-white hover:cursor-pointer hover:text-gray-800">Browse all</a>     
            </div>              
            <Swiper
                  sx={{overflow:'clip'}}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={25}
                  slidesPerView={slidesPerView}
                  onSwiper={(swiper) => (window.swiper = swiper)}
                  navigation={{
                      prevEl: '.swiper-button-prev',
                      nextEl: '.swiper-button-next',
                  }}
                  pagination={{ clickable: true }}   
              >
                  {products.map((product, index)=> 
                    <SwiperSlide>
                      <a href={product.url}>
                        <Card2 key={index} product={product} />
                      </a>
                    </SwiperSlide>
                  )} 

              </Swiper>  
              <div className='swiper-button-prev xl:ml-[-50px] absolute top-[60%]' style={{ backgroundImage: `url(${leftArrow})` }}></div>
              <div className='swiper-button-next xl:mr-[-35px] absolute right-0 top-[60%]' style={{ backgroundImage: `url(${rightArrow})` }}></div>
        </div>
    </div>
  )
}

export default CardsSlider


// const products=[
//     {
//         "id":1,
//         'title':'Project 1',
//         'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//         'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
//         'content':'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋',
//         'authorName':'John Doe',
//         'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
//         'authorDesc':'Web Developer'

//     },
//     {
//         "id":2,
//         'title':'Project 2',
//         'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//         'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
//         'content':'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋',
//         'authorName':'John Doe',
//         'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
//         'authorDesc':'Web Developer'
//     },
//     {
//         "id":3,
//         'title':'Project 3',
//         'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//         'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
//         'content':'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋',
//         'authorName':'John Doe',
//         'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
//         'authorDesc':'Web Developer'
//     },
//     {
//         "id":4,
//         'title':'Project 4',
//         'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//         'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
//         'content':'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋',
//         'authorName':'John Doe',
//         'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
//         'authorDesc':'Web Developer'
//     },
// ]
 