import React from 'react'
import data from '../../constants/data'
import images from '../../constants/images'
import Navbar from '../Navbar/Navbar'
import './details.css'
import { Footer }  from '../../container'

const Details = () => {
    const imgs = [images.gallery01,images.gallery02,images.gallery03,images.gallery03]
    return(
        <div className='Details'>
            <Navbar style={{position: 'fixed'}} />
            <div className='tiecs'>
            <div className="tieccuois">
                <h2>Tiệc Cưới</h2>
                <p className='borderbottom'></p>
                <div style={{display: 'flex',}}>
                {data.tieccuois.map((kind) =>
                <div className="partone">
                    <img key={images} style={{marginRight: '1rem', height: '200px', width: '100%'}} src={images.gallery01} alt="" />
                    <span key={kind.classify}>Phòng {kind.classify}</span>
                    <div className="price">                   
                        <p style={{textDecoration: "line-through", padding: '5px 15px'}}>{kind.cost}</p>
                        <p style={{textDecoration: "underline", padding: '5px 15px', color: 'lightblue'}}>{kind.sales}</p>
                    </div>
                    <p className='discount'>{kind.percent}</p>
                    <p className='descr'>{kind.descr}</p>
                </div>
                )}
                </div>
            </div>
            <div className="sinhnhats">
                <h2>Tiệc Sinh Nhật</h2>
                <p className='borderbottom'></p>
                <div style={{display: 'flex',}}>
                {data.tiecsinhnhats.map((kind) =>
                <div className="partone">
                    <img key={images} style={{marginRight: '1rem', height: '200px', width: '100%'}} src={images.gallery02} alt="" />
                    <span key={kind.classify}>Phòng {kind.classify}</span>
                    <div style={{display: 'flex'}} className="price">                   
                        <p style={{textDecoration: "line-through", padding: '5px 10px'}}>{kind.cost}</p>
                        <p style={{textDecoration: "underline", padding: '5px 10px', color: 'lightblue'}}>{kind.sales}</p>
                    </div>
                    <p className='discount'>{kind.percent}</p>
                    <p className='descr'>{kind.descr}</p>
                </div>
                )}
                </div>
            </div>
            <div className="giatiens">
                <h2>Tiệc Gia Tiên</h2>
                <p className='borderbottom'></p>
                <div style={{display: 'flex'}}>
                {data.tiecgiatiens.map((kind) =>
                <div className="partone">                  
                    <img key={images} style={{marginRight: '1rem', height: '200px', width: '100%'}} src={images.gallery03} alt="" />                    
                    <span style={{padding: '15px 10px'}} key={kind.classify}>Phòng {kind.classify}</span>
                    <div style={{display: 'flex'}} className="price">                   
                        <p style={{textDecoration: "line-through", padding: '5px 10px'}}>{kind.cost}</p>
                        <p style={{textDecoration: "underline", padding: '5px 10px', color: 'lightblue'}}>{kind.sales}</p>
                    </div>
                    <p className='discount'>{kind.percent}</p>
                    <p className='descr'>{kind.descr}</p>
                </div>
                )}
                </div>
            </div>
            <div className="giatiens">
                <h2>Tiệc Đầy Tháng</h2>
                <p className='borderbottom'></p>
                <div style={{display: 'flex'}}>
                {data.tiecdaythangs.map((kind) =>
                <div className="partone">                  
                    <img key={images} style={{marginRight: '1rem', height: '200px', width: '100%'}} src={images.gallery04} alt="" />                    
                    <span style={{padding: '15px 10px'}} key={kind.classify}>Phòng {kind.classify}</span>
                    <div style={{display: 'flex'}} className="price">                   
                        <p style={{textDecoration: "line-through", padding: '5px 10px'}}>{kind.cost}</p>
                        <p style={{textDecoration: "underline", padding: '5px 10px', color: 'lightblue'}}>{kind.sales}</p>
                    </div>
                    <p className='discount'>{kind.percent}</p>
                    <p className='descr'>{kind.descr}</p>
                </div>
                )}
                </div>
            </div>
            <div className="giatiens">
                <h2>Tiệc Ngoài Trời</h2>
                <p className='borderbottom'></p>
                <div style={{display: 'flex'}}>
                {data.tiecngoaitrois.map((kind) =>
                <div className="partone">                  
                    <img key={images} style={{marginRight: '1rem', height: '200px', width: '100%'}} src={images.laurels} alt="" />                    
                    <span style={{padding: '15px 10px'}} key={kind.classify}>Phòng {kind.classify}</span>
                    <div style={{display: 'flex'}} className="price">                   
                        <p style={{textDecoration: "line-through", padding: '5px 10px'}}>{kind.cost}</p>
                        <p style={{textDecoration: "underline", padding: '5px 10px', color: 'lightblue'}}>{kind.sales}</p>
                    </div>
                    <p className='discount'>{kind.percent}</p>
                    <p className='descr'>{kind.descr}</p>
                </div>
                )}
                </div>
            </div>
            <div className="giatiens">
                <h2>Tiệc Mừng Thọ</h2>
                <p className='borderbottom'></p>
                <div style={{display: 'flex'}}>
                {data.tiecmungthos.map((kind) =>
                <div className="partone">                  
                    <img key={images} style={{marginRight: '1rem', height: '200px', width: '100%'}} src={images.award01} alt="" />                    
                    <span style={{padding: '15px 10px'}} key={kind.classify}>Phòng {kind.classify}</span>
                    <div style={{display: 'flex'}} className="price">                   
                        <p style={{textDecoration: "line-through", padding: '5px 10px'}}>{kind.cost}</p>
                        <p style={{textDecoration: "underline", padding: '5px 10px', color: 'lightblue'}}>{kind.sales}</p>
                    </div>
                    <p className='discount'>{kind.percent}</p>
                    <p className='descr'>{kind.descr}</p>
                </div>
                )}
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Details