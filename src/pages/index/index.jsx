import {Cell, Popup} from "@test/nutui-react-taro";
import {useState} from "react";
import {Picker} from "@test/nutui-react-taro"

export default () => {
  const [isVisible1, setIsVisible1] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
  const listData1 = [
    [
      {value: 1, text: '南京市',},
      {value: 2, text: '无锡市',},
      {value: 3, text: '海北藏族自治区',},
      {value: 4, text: '北京市',},
      {value: 5, text: '连云港市',},
      {value: 6, text: '浙江市',},
      {value: 7, text: '江苏市',},
      {value: 8, text: '大庆市',},
      {value: 9, text: '绥化市',},
      {value: 10, text: '潍坊市',},
      {value: 11, text: '请按市',},
      {value: 12, text: '乌鲁木齐市'},
    ],
  ]
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <Cell title="请选择城市" desc={baseDesc} onClick={() => setIsVisible1(!isVisible1)}/>
      <Cell title="展示弹出层" isLink onClick={() => {
        setShowBasic(true)
      }}/>
      <Popup visible={showBasic} style={{padding: '30px 50px'}} onClose={() => {
        setShowBasic(false)
      }}>正文</Popup>
      <Picker
        isVisible={isVisible1}
        listData={listData1}
        onClose={() => setIsVisible1(false)}
      />
    </>
  );
};

