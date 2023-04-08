import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Button from "./components/Button";
import Input from "./components/Input";
import KdB from "./consts/KdB";
import {createRuleDefinitions, RuleDefinitions} from "./consts/RuleDefinitions";

const Wrapper = styled.div`
  margin: 32px;
`;

const SplitView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.2em;
`;

const Left = styled.div`
  box-sizing: border-box;
  margin-right: 8px;
  width: 70%;
`;

const Right = styled.div`
  box-sizing: border-box;
  margin-left: 8px;
  width: 30%;
`;

const App = () => {
    const URL_KDB = 'https://raw.githubusercontent.com/Mimori256/kdb-parse/main/kdb.json';
    const [kdb, setKdB] = useState<KdB>({ data: new Map() });
    const [ruleDefinitions, setRuleDefinitions] = useState<RuleDefinitions>(createRuleDefinitions());

    const onVersionEnter = (value: string) => {
        setRuleDefinitions(prevState => ({...prevState, version: value}));
    }

    const onAuthorEnter = (value: string) => {
        setRuleDefinitions(prevState => ({...prevState, author: value}));
    }

    useEffect(() => {
        fetch(new Request(URL_KDB)).then(async r => {
            setKdB({
                data: new Map<string, Array<string>>(Object.entries(JSON.parse(await r.text())))
            });
        })
    }, []);

    return (
        <Wrapper>
            <h2>移行要件チェックツール ルール定義データ作成ツール</h2>
            <SplitView>
                <Left>
                    <h3>要件追加</h3>
                    <Input placeHolder={"バージョン"} kdb={kdb} type={"text"} onEnterClick={v => onVersionEnter(v)}></Input>
                    <Input placeHolder={"作者"} kdb={kdb} type={"text"} onEnterClick={v => onAuthorEnter(v)}></Input>
                    <Button text={"Test"} />
                </Left>
                <Right>

                </Right>
            </SplitView>
        </Wrapper>
    );
}

export default App;
