import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import AccountBalance from '@material-ui/icons/AccountBalance';
import Equalizer from '@material-ui/icons/Equalizer';
import Backup from '@material-ui/icons/Backup';
import AttachFile from '@material-ui/icons/AttachFile';
import Adjust from '@material-ui/icons/Adjust';


import FormatUnderlinedOutlinedIcon from '@material-ui/icons/FormatUnderlinedOutlined';
import GamesOutlinedIcon from '@material-ui/icons/GamesOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import CallToActionOutlinedIcon from '@material-ui/icons/CallToActionOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import FormatColorTextOutlinedIcon from '@material-ui/icons/FormatColorTextOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import EditAttributesOutlinedIcon from '@material-ui/icons/EditAttributesOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TranslateIcon from '@material-ui/icons/Translate';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';

const icons = {
    NavigationOutlinedIcon: NavigationOutlinedIcon,
    AccountBalance: AccountBalance,
    Equalizer:Equalizer,
    Backup:Backup,
    AttachFile:AttachFile,
    Adjust:Adjust,
    HomeOutlinedIcon: HomeOutlinedIcon,
    FormatUnderlinedOutlinedIcon: FormatUnderlinedOutlinedIcon,
    GamesOutlinedIcon: GamesOutlinedIcon,
    LoyaltyOutlinedIcon: LoyaltyOutlinedIcon,
    ForumOutlinedIcon: ForumOutlinedIcon,
    DescriptionOutlinedIcon: DescriptionOutlinedIcon,
    GridOnOutlinedIcon: GridOnOutlinedIcon,
    TableChartOutlinedIcon: TableChartOutlinedIcon,
    AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
    CallToActionOutlinedIcon: CallToActionOutlinedIcon,
    NotificationsNoneOutlinedIcon: NotificationsNoneOutlinedIcon,
    AppsOutlinedIcon: AppsOutlinedIcon,
    SmsOutlinedIcon: SmsOutlinedIcon,
    FilterVintageOutlinedIcon: FilterVintageOutlinedIcon,
    FormatColorTextOutlinedIcon: FormatColorTextOutlinedIcon,
    ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
    LayersOutlinedIcon: LayersOutlinedIcon,
    BlockOutlinedIcon: BlockOutlinedIcon,
    ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
    FiberManualRecordOutlinedIcon: FiberManualRecordOutlinedIcon,
    EditAttributesOutlinedIcon: EditAttributesOutlinedIcon,
    FaceOutlinedIcon: FaceOutlinedIcon,
    RadioButtonUncheckedOutlinedIcon: RadioButtonUncheckedOutlinedIcon,
    QuestionAnswerOutlinedIcon: QuestionAnswerOutlinedIcon,
    AccountCircleOutlinedIcon: AccountCircleOutlinedIcon,
    ShoppingCartOutlinedIcon: ShoppingCartOutlinedIcon,
    MailOutlineRoundedIcon: MailOutlineRoundedIcon,
    SpeakerNotesOutlinedIcon: SpeakerNotesOutlinedIcon,
    CardGiftcardOutlinedIcon: CardGiftcardOutlinedIcon,
    ErrorOutlineRoundedIcon: ErrorOutlineRoundedIcon,
    HourglassEmptyRoundedIcon: HourglassEmptyRoundedIcon,
    MonetizationOnOutlinedIcon: MonetizationOnOutlinedIcon,
    AssignmentIndOutlinedIcon: AssignmentIndOutlinedIcon,
    SecurityOutlinedIcon: SecurityOutlinedIcon,
    HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
    TranslateIcon: TranslateIcon,
    FormatListNumberedRtlIcon: FormatListNumberedRtlIcon,
};

export default {
    items: [
        {
            id: 'navigation',
            title: 'Dashboard',
            caption: 'Admin Panel',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                // {
                //     id: 'dashboard',
                //     title: 'Dashboard',
                //     type: 'item',
                //     icon: icons['HomeOutlinedIcon'],
                //     url: '/dashboard/default',
                // },
                {
                    id: 'dashboard',
                    title: 'As Per Base system',
                    type: 'item',
                    icon: icons['Equalizer'],
                    url: '/dashboard/default/basesystem',
                },
                {
                    id: 'dashboard',
                    title: 'Central Platform',
                    type: 'item',
                    icon: icons['Adjust'],
                    url: '/dashboard/default1/centralplatform',
                },
                {
                    id: 'dashboard',
                    title: 'As Submitted to ZATCA',
                    type: 'item',
                    icon: icons['Backup'],
                    url: '/dashboard/default2/zatca',
                },
                {
                    id: 'dashboard',
                    title: 'Stuck Invoices Report',
                    type: 'item',
                    icon: icons['AttachFile'],
                    url: '/dashboard/default3/report',
                },
                // {
                //     id: 'widget',
                //     title: 'Widget',
                //     type: 'collapse',
                //     icon: icons['CardGiftcardOutlinedIcon'],
                //     chip: {
                //         label: 'Pro',
                //         error: true,
                //         size: 'small',
                //     },
                //     children: [
                //         {
                //             id: 'statistic',
                //             title: 'Statistic',
                //             type: 'item',
                //             url: '/widget/statistic',
                //         },
                //         {
                //             id: 'data',
                //             title: 'Data',
                //             type: 'item',
                //             url: '/widget/data',
                //         },
                //         {
                //             id: 'chart',
                //             title: 'Chart',
                //             type: 'item',
                //             url: '/widget/chart',
                //         },
                //     ],
                // },
               
               
            ],
        },     
    ],
};
