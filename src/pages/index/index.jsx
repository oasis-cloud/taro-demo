import React from "react";
import {Button, Uploader} from "@test/nutui-react-taro"
import * as Taro from '@tarojs/taro'

export default () => {
  const handleClick = () => {
    Taro.navigateTo({url: '/pages/a/index'})
  }
  return <Button onClick={handleClick}>xxxx</Button>
};

