import {IBaseLayout} from "./index.interfaces";
import {LayoutContainer} from "../../components/LayoutContainer/LayoutContainer";
import styles from './index.module.sass';
import {Header} from "../../components/Header/Header";
export const BaseLayout = (props: IBaseLayout) => {
    const {
        title,
        children
    } = props;

    return (
        <div className={ styles.wrapper }>
            <LayoutContainer>
                <main>
                    <h1 className={ styles.baseLayout__title }>
                        { title }
                    </h1>
                    { children }
                </main>
            </LayoutContainer>
        </div>
    )
}