import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import { messages, PIN_MAX_CNT } from "../../common/utils/constant";
import { postCallApi } from "../../common/utils/apiUtils/apiUtils";
import { getStorageUserId } from "../../common/utils/utils";

interface Props {
    open: boolean;
    onClose: () => void;
}

function PinChangeModal({ open, onClose }: Props) {
    const [currentPin, setCurrentPin] = useState("");
    const [newPin, setNewPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");

    const [showCurrentPin, setShowCurrentPin] = useState(false);
    const [showNewPin, setShowNewPin] = useState(false);
    const [showConfirmPin, setShowConfirmPin] = useState(false);

    if (!open) {
        return null;
    }

    const handleChangePin = async () => {
        if (
            !currentPin ||
            !newPin ||
            !confirmPin
        ) {
            alert(messages.PIN_INPUT_ALL_CHECK);
            return;
        }

        if (newPin.length !== PIN_MAX_CNT) {
            alert(messages.PIN_INPUT_MAX_CNT);
            return;
        }

        if (newPin !== confirmPin) {
            alert(messages.PIN_MATCH_FAIL);
            return;
        }

        try {
            // TODO API 호출
            const confirmRes = confirm(messages.PIN_CHANGE_CONFIRM);
            
            if(!confirmRes)
                return;

            const res = await postCallApi("/users/change-pin", {
                user_id: getStorageUserId() || "",
                current_pin : currentPin,
                new_pin : newPin,
            });

            const data = res.data;

            if(data.code < 0){
                alert(data.msg);
                return;
            }

            alert(messages.PIN_CHANGE_DONE);
            
            setCurrentPin("");
            setNewPin("");
            setConfirmPin("");

            onClose();
        } catch (e) {
            console.error(e);
            alert(messages.PIN_CHANGE_FAIL);
        }
    };

    return (
        <div
            className="absolute fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full max-w-xs rounded-3xl bg-white p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="mb-8 flex flex-col items-start justify-between">
                    <div className="w-full flex flex-row items-start justify-between">
                        <div className="flex ">
                            <h2 className="text-2xl font-bold">
                                <span className="text-[#344054]">PIN 번호 변경</span>
                            </h2>
                        </div>
                        <div className="flex grow justify-end">
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-full p-2 transition hover:bg-gray-100"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="mt-1 text-sm text-gray-500">
                            새로운 {PIN_MAX_CNT}자리 PIN 번호를 설정하세요.
                        </p>
                    </div>
                </div>

                {/* 현재 PIN */}
                <div className="mb-3 grid grid-cols-[110px_1fr] items-center">
                    <label className="text-xs font-medium text-[#344054]">
                        현재 PIN 번호
                    </label>

                    <div className="flex min-w-[140px] max-w-[180px] items-center rounded-xl border border-gray-300 px-4">    
                        <input
                            type={showCurrentPin ? "text" : "password"}
                            maxLength={PIN_MAX_CNT}
                            value={currentPin}
                            onChange={(e) =>
                                setCurrentPin(
                                    e.target.value.replace(/\D/g, "")
                                )
                            }
                            onKeyDown={(e) => {
                                if(e.key === "Enter")
                                    handleChangePin();
                            }}
                            className="h-10 text-sm min-w-[80px] max-w-[130px] flex-1 outline-none"
                            placeholder="현재 PIN 번호"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowCurrentPin(!showCurrentPin)
                            }
                        >
                            {showCurrentPin ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>
                </div>

                {/* 새 PIN */}
                <div className="mb-3 grid grid-cols-[110px_1fr] items-center">
                    <label className="text-xs w-[100px] font-medium text-[#344054]">
                        새 PIN 번호
                    </label>

                    <div className="flex min-w-[140px] max-w-[180px] items-center rounded-xl border border-gray-300 px-4">
                        <input
                            type={showNewPin ? "text" : "password"}
                            maxLength={PIN_MAX_CNT}
                            value={newPin}
                            onChange={(e) =>
                                setNewPin(
                                    e.target.value.replace(/\D/g, "")
                                )
                            }
                            onKeyDown={(e) => {
                                if(e.key === "Enter")
                                    handleChangePin();
                            }}
                            className="h-10 text-sm min-w-[80px] max-w-[130px] flex-1 outline-none"
                            placeholder="새 PIN 번호"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowNewPin(!showNewPin)
                            }
                        >
                            {showNewPin ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>
                </div>

                {/* 새 PIN 확인 */}
                <div className="mb-3 grid grid-cols-[110px_1fr] items-center">
                    <label className="text-xs font-medium text-[#344054]">
                        PIN 번호 확인
                    </label>

                    <div className="flex min-w-[140px] max-w-[180px] items-center rounded-xl border border-gray-300 px-4">
                        <input
                            type={showConfirmPin ? "text" : "password"}
                            maxLength={PIN_MAX_CNT}
                            value={confirmPin}
                            onChange={(e) =>
                                setConfirmPin(
                                    e.target.value.replace(/\D/g, "")
                                )
                            }
                            onKeyDown={(e) => {
                                if(e.key === "Enter")
                                    handleChangePin();
                            }}
                            className="h-10 text-sm min-w-[80px] max-w-[130px] flex-1 outline-none"
                            placeholder="PIN 번호 확인"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPin(!showConfirmPin)
                            }
                        >
                            {showConfirmPin ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>
                </div>

                {/* 버튼 */}
                <div className="flex justify-end gap-1">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-xl border border-gray-300 px-2 py-1 text-sm font-medium transition hover:bg-gray-100"
                    >
                        취소
                    </button>

                    <button
                        type="button"
                        onClick={handleChangePin}
                        className="rounded-xl bg-[#D4A017] px-2 py-1 text-sm font-medium text-white transition hover:bg-[#BF8F0A]"
                    >
                        변경
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PinChangeModal;