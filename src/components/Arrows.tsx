
type NavigationProps = {
    visible: boolean;
    onPrev: () => void;
    onNext: () => void;
}

export default function Navigation({ visible, onPrev, onNext }: NavigationProps) {
    if (!visible) return null;

    return (
        <>
            <button
                onClick={onPrev}
                className="col-start-1 row-start-3 flex items-center justify-center opacity-50 hover:opacity-100"
            >
                ←
            </button>

            <button
                onClick={onNext}
                className="col-start-4 row-start-3 flex items-center justify-center opacity-50 hover:opacity-100"
            >
                →
            </button>
        </>
    );
}
