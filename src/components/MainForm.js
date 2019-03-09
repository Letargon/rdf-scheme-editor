import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from "react-router-dom";
import { Select, Input, Button } from 'antd';

const { Content } = Layout;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class MainForm extends Component {

    render() {
        return (
            <Layout style={{ marginLeft: 200, padding: '0 24px 24px' }}>

                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>

                <Content style={{
                    margin: '24px 16px 0',
                    overflow: 'initial'
                }}
                >
                    {/* 
                    <PropertyEditor />
                    */}

                    <Select
                        defaultValue="1"
                        style={{ width: '100%', maxWidth: '500px', marginBottom: 10 }}
                        onChange={handleChange}
                    >

                        <Option value="1">In Memory Store</Option>
                        <Option value="2">In Memory Store RDF Schema</Option>
                        <Option value="3">In Memory Store RDF Schema and Direct Type Hierarchy</Option>
                        <Option value="4">In Memory Java Store with basic SPIN support</Option>
                        <Option value="5">In Memory Store with Lucene support</Option>
                        <Option value="6">In Memory Store with RDFS+SPIN support</Option>
                        <Option value="7">In Memory Store with RDFS+SPIN+Lucene support</Option>
                        <Option value="8">In Memory Store Custom Graph Query Inference</Option>
                        <Option value="9">Native Java Store</Option>
                        <Option value="10">Native Java Store RDF Schema</Option>
                        <Option value="11">Native Java Store RDF Schema and Direct Type Hierarchy</Option>
                        <Option value="12">Native Java Store Custom Graph Query Inference</Option>
                        <Option value="13">Native Java Store with basic SPIN support</Option>
                        <Option value="14">Native Java Store with Lucene support</Option>
                        <Option value="15">Native Java Store with RDFS+SPIN support</Option>
                        <Option value="16">Native Java Storewith RDFS+SPIN+Lucene support</Option>
                        <Option value="17">Remote RDF Store</Option>
                        <Option value="18">SPARQL endpoint proxy</Option>
                        <Option value="19">Federation Store</Option>

                    </Select>

                    <br />

                    <Input
                        placeholder="ID"
                        style={{ width: '100%', maxWidth: '500px', marginBottom: 10 }}
                        mode="horizontal"
                    />

                    <br />

                    <Input
                        placeholder="Title"
                        style={{ width: '100%', maxWidth: '500px', marginBottom: 10 }}
                        mode="horizontal"
                    />

                    <br />

                    <div style={{ width: '100%', maxWidth: '550px' }}>
                        <Button
                            style={{ position: 'absolute' }}
                        >Next</Button>

                        <Button
                            style={{ marginLeft: '77.5%', }}
                        >Cancel</Button>
                    </div>

                </Content>
            </Layout>
        );
    }
}