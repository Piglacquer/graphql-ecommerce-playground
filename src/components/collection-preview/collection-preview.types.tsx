export type Props = {
	key: number,
	id?: number,
	routeName: string,
	title: string,
	items: CollectionItem_[],
};

export type CollectionItem_ = {
	id?: number,
	name: string,
	imageUrl: string,
	price: number,
};