import React from "react";
import {Button, Uploader} from "@nutui/nutui-react-taro"
import Taro from '@tarojs/taro'

export default () => {
  console.log(Taro.chooseImage)
  const handleClick = () => {
    Taro.navigateTo({url: '/pages/a/index'})
  }
  return <>
    <Uploader url={''}></Uploader>
    <Button onClick={handleClick}>xxxx</Button>
    </>
};

