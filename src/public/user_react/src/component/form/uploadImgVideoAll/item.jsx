import { Card, Button, Progress } from 'antd';
import {
    EyeOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './item.css'
const videoImg = new URL('@/static/default/video.jpg', import.meta.url).href;

export default ({ data, preview, remove }) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: data.img });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <Card
            key={data.uid}
            size="small"
            bodyStyle={{ padding: '8px' }}
            style={style}
            ref={setNodeRef}
            className={isDragging ? 'dragon upload-img' : 'upload-img'}
            {...attributes}
            {...listeners}
        >
            {data.status === 'uploading' ? <>
                <div className="bg" style={{ alignItems: 'center', display: 'flex' }}>
                    <Progress percent={data.percent} size="small" showInfo={false} />
                </div>
            </> : ''}
            {data.status === 'done' ? <>
                <div className="bg" >
                    {['jpg', 'jpeg', 'png'].indexOf(data.url.substring(data.url.lastIndexOf(".") + 1)) == -1 ? <>
                        <img src={videoImg} key={data.url} />
                    </> : <>
                        <img src={data.url} key={data.url} />
                    </>}
                    <div className="hover">
                        <div>
                            <Button type="text" size="small" onClick={() => preview(data)}>
                                <EyeOutlined className="icon" />
                            </Button>
                            <Button type="text" size="small" onClick={() => remove(data)}>
                                <DeleteOutlined className="icon" />
                            </Button>
                        </div>
                    </div>
                </div>
            </> : ''}
        </Card>
    )
}
