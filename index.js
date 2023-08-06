import React from 'react';

function cartempty() {
    return (
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-5xl">장바구니</h1>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-3xl uppercase w-2/5">해당상품</h3>
                <h3 className="font-semibold text-center text-gray-600 text-3xl uppercase w-1/5">양</h3>
                <h3 className="font-semibold text-center text-gray-600 text-3xl uppercase w-1/5">가격</h3>
                <h3 className="font-semibold text-center text-gray-600 text-3xl uppercase w-1/5">합계</h3>
              </div>
            </div>
    
            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8"></h1>
              <div className="flex justify-between mt-80 mb-80">
                <button className="bg-pink-300 font-semibold hover:bg-pink-800 py-3 text-3xl text-white uppercase w-full">결제하기</button>
              </div>
            </div>
        </div>
        </div>        
      )
    }

export default cartempty;