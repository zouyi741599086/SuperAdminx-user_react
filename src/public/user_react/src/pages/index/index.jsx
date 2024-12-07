import { useState } from 'react'
import { PageContainer } from '@ant-design/pro-components';
import { ProCard } from '@ant-design/pro-components';
import { Col, Row, Space, Avatar, Typography, Tag } from 'antd';
import { useRecoilState } from 'recoil';
import { userStore } from '@/store/user';
import { layoutSettingStore } from '@/store/layoutSetting';

/**
 * 后台首页
 * 
 * @author zy <741599086@qq.com>
 * @link https://www.superadminx.com/
 */
export default () => {
    const [user] = useRecoilState(userStore);
    const [layoutSetting] = useRecoilState(layoutSettingStore);

    return (
        <>
            <PageContainer
                ghost
                className="sa-page-container"
            >
                <Space direction="vertical" style={{ width: '100%' }} size="middle">
                    <ProCard style={{ marginTop: '4px' }}>
                        <Row gutter={[0, 20]}>
                            <Col span={24} >
                                <Row type="flex" gutter={[12, 0]}>
                                    <Col flex={0}>
                                        <Avatar size={50} src={`${user.img}`}>{user.name?.substr(0, 1)}</Avatar>
                                    </Col>
                                    <Col flex={1}>
                                        <Row>
                                            <Col span={24} >
                                                <Space>
                                                    <Typography.Title
                                                        level={4}
                                                        style={{ margin: '0px', display: 'inline-block' }}
                                                    >{user.name}</Typography.Title>
                                                </Space>
                                            </Col>
                                            <Col span={24}>
                                                <Typography.Title
                                                    level={5}
                                                    style={{ margin: '0px', fontWeight: 'normal' }}
                                                >{user.tel}</Typography.Title>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24} >
                                {!layoutSetting.isMobile ? <>
                                    <iframe
                                        scrolling="no"
                                        style={{ width: '100%', height: '50px' }}
                                        frameBorder="0"
                                        allowtransparency="true"
                                        src={`//i.tianqi.com/index.php?c=code&id=12&icon=1&num=5&site=12${layoutSetting.antdThemeValue == 'dark' ? '&color=%23FFFFFF' : ''}`}
                                    ></iframe>
                                </> : ''}

                            </Col>
                        </Row>
                    </ProCard>
                </Space>
            </PageContainer>
        </>
    )
}
