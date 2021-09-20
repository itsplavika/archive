export default function TimelineIcon(props) {
    const { size = "28", color = "#979DAC" } = props;

    return (
        <svg width={size} height={size} viewBox='0 0 28 28' fill='none'>
            <path
                d='M19.765 3.70599H26.3537C26.8076 3.70599 27.1773 4.07458 27.1773 4.52959V7.82407C27.1773 8.27907 26.8076 8.64766 26.3537 8.64766H19.765C19.31 8.64766 18.9414 8.27907 18.9414 7.82407V4.52959C18.9414 4.07458 19.31 3.70599 19.765 3.70599ZM0.823592 11.5295H7.41227C7.86727 11.5295 8.23586 11.8981 8.23586 12.3531V15.6475C8.23586 16.1025 7.86727 16.4711 7.41227 16.4711H0.823592C0.369684 16.4711 0 16.1025 0 15.6475V12.3531C0 11.8981 0.369684 11.5295 0.823592 11.5295ZM19.765 19.353H26.3537C26.8076 19.353 27.1773 19.7215 27.1773 20.1765V23.471C27.1773 23.926 26.8076 24.2946 26.3537 24.2946H19.765C19.31 24.2946 18.9414 23.926 18.9414 23.471V20.1765C18.9414 19.7215 19.31 19.353 19.765 19.353ZM14.4123 19.494C15.1145 19.7412 15.6701 20.298 15.9184 21.0001H17.7066V22.6473H15.9184C15.6701 23.3495 15.1145 23.9051 14.4123 24.1534V27.1766C14.4123 27.6316 14.0437 28.0002 13.5887 28.0002C13.1337 28.0002 12.7651 27.6316 12.7651 27.1766V24.1534C11.8059 23.8144 11.1179 22.8989 11.1179 21.8237C11.1179 20.7475 11.8059 19.8331 12.7651 19.494V16.3298C12.0629 16.0815 11.5073 15.5259 11.259 14.8237H9.47072V13.1765H11.259C11.5073 12.4743 12.0629 11.9187 12.7651 11.6704V8.50612C11.8059 8.16707 11.1179 7.25267 11.1179 6.17644C11.1179 5.10129 11.8059 4.1858 12.7651 3.84675V0.823592C12.7651 0.368592 13.1337 0 13.5887 0C14.0437 0 14.4123 0.368592 14.4123 0.823592V3.84675C15.1145 4.09503 15.6701 4.65066 15.9184 5.35284H17.7066V7.00003H15.9184C15.6701 7.70221 15.1145 8.25894 14.4123 8.50612V11.6704C15.3715 12.0095 16.0595 12.9238 16.0595 14.0001C16.0595 15.0763 15.3715 15.9907 14.4123 16.3298V19.494ZM13.5887 7.00017C14.0437 7.00017 14.4123 6.63158 14.4123 6.17658C14.4123 5.72158 14.0437 5.35298 13.5887 5.35298C13.1337 5.35298 12.7651 5.72158 12.7651 6.17658C12.7651 6.63158 13.1337 7.00017 13.5887 7.00017ZM13.5887 14.8236C14.0437 14.8236 14.4123 14.4551 14.4123 14.0001C14.4123 13.5451 14.0437 13.1765 13.5887 13.1765C13.1337 13.1765 12.7651 13.5451 12.7651 14.0001C12.7651 14.4551 13.1337 14.8236 13.5887 14.8236ZM13.5887 22.6471C14.0437 22.6471 14.4123 22.2785 14.4123 21.8235C14.4123 21.3685 14.0437 20.9999 13.5887 20.9999C13.1337 20.9999 12.7651 21.3685 12.7651 21.8235C12.7651 22.2785 13.1337 22.6471 13.5887 22.6471Z'
                fill={color}
            />
        </svg>
    );
}