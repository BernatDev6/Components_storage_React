import React from 'react';
import './CardComp6.css'

export const CardComp6 = () => {
    return (
        <div className="card6">
            <div className="card6__img">
                <img src="https://picsum.photos/300" alt="profile-img"/>
            </div>
            <div className="card6__content">
                <div className="content__info">
                    <div className="info__titles">
                        <h2>Card User 6</h2>
                        <span>Web Developer/React</span>
                    </div>
                    <div className="info__data">
                        <div className="data__posts">
                            <h3>63</h3>
                            <span>Posts</span>
                        </div>
                        <div className="data__followers">
                            <h3>310k</h3>
                            <span>Followers</span>
                        </div>
                        <div className="data__following">
                            <h3>22</h3>
                            <span>Following</span>
                        </div>
                    </div>
                    <div className="info__btn">
                        <button>Follow</button>
                        <button>Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CardComp6JSX = `
export const CardComp6 = () => {
    return (
        <div className="card6">
            <div className="card6__img">
                <img src="https://picsum.photos/300" alt="profile-img"/>
            </div>
            <div className="card6__content">
                <div className="content__info">
                    <div className="info__titles">
                        <h2>Card User 6</h2>
                        <span>Web Developer/React</span>
                    </div>
                    <div className="info__data">
                        <div className="data__posts">
                            <h3>63</h3>
                            <span>Posts</span>
                        </div>
                        <div className="data__followers">
                            <h3>310k</h3>
                            <span>Followers</span>
                        </div>
                        <div className="data__following">
                            <h3>22</h3>
                            <span>Following</span>
                        </div>
                    </div>
                    <div className="info__btn">
                        <button>Follow</button>
                        <button>Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
`;

export const CardComp6CSS = `
.card6{
    position: relative;
    top: 50px;
    margin-bottom: 6rem;
    width: 300px;
    height: 180px;
    background: #f8f8f8;
    border-radius: 20px;
    box-shadow: 0px 20px 20px rgba(0,0,0, 0.16);
    transition: 0.6s;
}

.card6:hover{
    height: 420px;
}

.card6__img{
    position: absolute;
    left: 50%;
    top: -20%;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
    border-radius: 20px;
    box-shadow: 0px 8px 30px rgba(0,0,0, 0.35);
    overflow: hidden;
    transition: 0.6s;
}

.card6:hover .card6__img{
    width: 220px;
    height: 220px;
}

.card6__img img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card6__content{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
}

.content__info{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 20px;
    text-align: center;
    width: 100%;
    transition: 0.6s;
    transform: translateY(200px);
}

.card6:hover .card6__content .content__info{
    transform: translateY(0px);
}

.content__info h2{
    color: #000000;
    font-size: 1.5rem;
}

.content__info span{
    color: #bdbdbd;
}

.info__data{
    display: flex;
    justify-content: space-between;
}

.info__data h3{
    font-size: 1em;
    color: #000000;
    line-height: 1.2em;
    font-weight: 600;
}

.info__btn{
    display: flex;
    justify-content: space-between;
}

.info__btn button {
    padding: 10px 30px;
    border-radius: 4px;
    border: none;
    outline: none;
    font-size: 1em;
    background: #4fa0cf;
    color: #fcfcfc;
    cursor: pointer;
}
`;