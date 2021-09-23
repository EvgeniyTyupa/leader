import { useTranslation } from "react-i18next"

export const useShedule = () => {
    const { t } = useTranslation()

    let shedule = [
        {
            id: "1",
            title: t("modalShedule.points.one.title"),
            points: [
                t("modalShedule.points.one.one"),
                t("modalShedule.points.one.two"),
                t("modalShedule.points.one.three"),
                t("modalShedule.points.one.four"),
                t("modalShedule.points.one.five"),
            ]
        },
        {
            id: "2",
            title: t("modalShedule.points.two.title"),
            points: [
                t("modalShedule.points.two.one"),
                t("modalShedule.points.two.two"),
                t("modalShedule.points.two.three"),
                t("modalShedule.points.two.four"),
                t("modalShedule.points.two.five"),
            ]
        },
        {
            id: "3",
            title: t("modalShedule.points.three.title"),
            points: [
                t("modalShedule.points.three.one"),
                t("modalShedule.points.three.two"),
                t("modalShedule.points.three.three"),
                t("modalShedule.points.three.four"),
                t("modalShedule.points.three.five"),
            ]
        },
        {
            id: "4",
            title: t("modalShedule.points.four.title"),
            points: []
        },
        {
            id: "5",
            title: t("modalShedule.points.five.title"),
            points: [
                t("modalShedule.points.five.one"),
                t("modalShedule.points.five.two"),
                t("modalShedule.points.five.three"),
                t("modalShedule.points.five.four"),
                t("modalShedule.points.five.five"),
                t("modalShedule.points.five.six"),
                t("modalShedule.points.five.seven"),
                t("modalShedule.points.five.eight"),
                t("modalShedule.points.five.nine"),
            ]
        },
        {
            id: "6",
            title: t("modalShedule.points.six.title"),
            points: [
                t("modalShedule.points.six.one"),
                t("modalShedule.points.six.two")
            ]
        },
        {
            id: "7",
            title: t("modalShedule.points.seven.title"),
            points: [
                t("modalShedule.points.seven.one"),
                t("modalShedule.points.seven.two"),
                t("modalShedule.points.seven.three"),
                t("modalShedule.points.seven.four")
            ]
        },
        {
            id: "8",
            title: t("modalShedule.points.eight.title"),
            points: [
                t("modalShedule.points.eight.one"),
                t("modalShedule.points.eight.two"),
                t("modalShedule.points.eight.three"),
                t("modalShedule.points.eight.four")
            ]
        },
        {
            id: "9",
            title: t("modalShedule.points.nine.title"),
            points: [
                t("modalShedule.points.nine.one"),
                t("modalShedule.points.nine.two"),
                t("modalShedule.points.nine.three"),
                t("modalShedule.points.nine.four")
            ]
        },
        {
            id: "10",
            title: t("modalShedule.points.ten.title"),
            points: [
                t("modalShedule.points.ten.one"),
                t("modalShedule.points.ten.two"),
                t("modalShedule.points.ten.three"),
                t("modalShedule.points.ten.four")
            ]
        }
    ]
    return shedule
}