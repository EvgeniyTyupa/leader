import { useTranslation } from "react-i18next"

import consulting from '../Assets/Icons/consulting.png'
import contract from '../Assets/Icons/contract.png'
import credit_card from '../Assets/Icons/credit-card.png'
import customer from '../Assets/Icons/customer.png'
import digital_marketing from '../Assets/Icons/digital-marketing.png'
import europe from '../Assets/Icons/europe.png'
import event from '../Assets/Icons/event.png'
import expand from '../Assets/Icons/expand.png'
import folded_newspaper from '../Assets/Icons/folded-newspaper.png'
import idea from '../Assets/Icons/idea.png'
import mortarboard from '../Assets/Icons/mortarboard.png'
import notebook from '../Assets/Icons/notebook.png'
import open_book from '../Assets/Icons/open-book.png'
import speech_buble from '../Assets/Icons/speech-bubble.png'

import uliana from '../Assets/uliana.jpg'
import tatiana from '../Assets/tatiana.jpg'
import artem from '../Assets/artem.jpg'

export const useSpeakers = () => {
    const { t } = useTranslation()

    let speakers = [
        {
            id: "uliana",
            name: t("speakers.one.name"),
            subtitle: t("speakers.one.subtitle"),
            short: t("speakers.one.short"),
            photo: uliana,
            points: [
                {
                    id: "1",
                    text: t("speakers.one.points.one"),
                    icon: open_book
                },
                {
                    id: "2",
                    text: t("speakers.one.points.two"),
                    icon: europe
                },
                {
                    id: "3",
                    text: t("speakers.one.points.three"),
                    icon: notebook
                },
                {
                    id: "4",
                    text: t("speakers.one.points.four"),
                    icon: customer
                },
                {
                    id: "5",
                    text: t("speakers.one.points.five"),
                    icon: idea
                },
                {
                    id: "6",
                    text: t("speakers.one.points.six"),
                    icon: idea
                },
                {
                    id: "7",
                    text: t("speakers.one.points.seven"),
                    icon: idea
                },
                {
                    id: "8",
                    text: t("speakers.one.points.eight"),
                    icon: idea
                }
            ]
        },
        {
            id: "tatiana",
            name: t("speakers.two.name"),
            subtitle: t("speakers.two.subtitle"),
            short: t("speakers.two.short"),
            photo: tatiana,
            points: [
                {
                    id: "1",
                    text: t("speakers.two.points.one"),
                    icon: credit_card
                },
                {
                    id: "2",
                    text: t("speakers.two.points.two"),
                    icon: mortarboard
                },
                {
                    id: "3",
                    text: t("speakers.two.points.three"),
                    icon: customer
                },
                {
                    id: "4",
                    text: t("speakers.two.points.four"),
                    icon: customer
                },
                {
                    id: "5",
                    text: t("speakers.two.points.five"),
                    icon: customer
                },
            ]
        },
        {
            id: "artem",
            name: t("speakers.three.name"),
            subtitle: t("speakers.three.subtitle"),
            short: t("speakers.three.short"),
            photo: artem,
            points: [
                {
                    id: "1",
                    text: t("speakers.three.points.one"),
                    icon: notebook
                },
                {
                    id: "2",
                    text: t("speakers.three.points.two"),
                    icon: speech_buble
                },
                {
                    id: "3",
                    text: t("speakers.three.points.three"),
                    icon: expand
                },
                {
                    id: "4",
                    text: t("speakers.three.points.four"),
                    icon: mortarboard
                }
            ]
        },
    ]
    return speakers
}