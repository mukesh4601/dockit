import {
    Layout, Menu, Breadcrumb, Icon, Avatar,
} from 'antd';
import * as React from "react";

import "antd/dist/antd.css"
import "storm-react-diagrams/dist/style.min.css";

import SideNavigation from "./SideNavigation";
import DockerContainerAvatar from "./DockerContainerAvatar";
import * as SRD from "storm-react-diagrams";


const bootIcon = require('./icons/boot.png');
const nodeIcon = require('./icons/node.png');
const mysqlIcon = require('./icons/mysql.png');
const mongodbIcon = require('./icons/mongodb.png');
const elasticsearchIcon = require('./icons/elasticsearch.png');
const cassandraIcon = require('./icons/cassandra.png');
const rabbitmqIcon = require('./icons/rabbitmq.png');
const activemqIcon = require('./icons/activemq.png');
const gradleIcon = require('./icons/gradle.png');
const nginxIcon = require('./icons/nginx.png');

const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;



export default class RootComponent extends React.Component {

    render() {
        let diagramEngine = new SRD.DiagramEngine();
        diagramEngine.installDefaultFactories();

        let diagramModel = new SRD.DiagramModel();

        let defaultNodeModel = new SRD.DefaultNodeModel("Node 1");
        let defaultPortModel = defaultNodeModel.addOutPort("Out");
        defaultNodeModel.setPosition(100,100);

        let defaultNodeModel2 = new SRD.DefaultNodeModel("Node 2");
        let defaultPortModel2 = defaultNodeModel2.addInPort("In");
        defaultNodeModel2.setPosition(400,400);

        // let linkModel = defaultPortModel2.link(defaultPortModel);
        // diagramModel.addAll(defaultNodeModel,defaultNodeModel2,linkModel);

        return (
            <Layout style={{minHeight: '100vh'}}>
                <SideNavigation/>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>

                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            {/*<DockerContainerCard/>*/}
                            <DockerContainerAvatar containerIcon={bootIcon}/>
                            <DockerContainerAvatar containerIcon={nodeIcon}/>
                            <DockerContainerAvatar containerIcon={mysqlIcon}/>
                            <DockerContainerAvatar containerIcon={mongodbIcon}/>
                            <DockerContainerAvatar containerIcon={elasticsearchIcon}/>
                            <DockerContainerAvatar containerIcon={cassandraIcon}/>
                            <DockerContainerAvatar containerIcon={rabbitmqIcon}/>
                            <DockerContainerAvatar containerIcon={activemqIcon}/>
                            <DockerContainerAvatar containerIcon={gradleIcon}/>
                            <DockerContainerAvatar containerIcon={nginxIcon}/>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        DockIt ©2018
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}